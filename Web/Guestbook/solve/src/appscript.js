function doGet(e) {
  let file;
  try{
    file = SpreadsheetApp.openById(e.parameter.sheetId);
  }
  finally{
    if(!file){
      return ContentService.createTextOutput(JSON.stringify({status:404, message:"invalid sheet ID"})).setMimeType(ContentService.MimeType.JSON);
    }
  }
  const sheet = file.getSheetByName('sorted');
  const [headers, ...rows] = sheet.getDataRange().getValues();
  const res = rows.map(row => headers.reduce((a,x, i)=> {a[x] = row[i]; return a;},{}))
  return ContentService.createTextOutput(JSON.stringify(res)).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const { parameter, postData: { contents, type } = {} } = e;
  let file;
  try{
    file = SpreadsheetApp.openById(parameter.sheetId);
  }
  finally{
    if(!file){
      return ContentService.createTextOutput(JSON.stringify({status:404, message:"invalid sheet ID"})).setMimeType(ContentService.MimeType.JSON);
    }
  }
  let name,message;
  if (type === 'application/json') {
    ({name,message} = JSON.parse(contents));
  } else {
    ({name, message} = parameter);
  }
  if(!name || !message){
    return ContentService.createTextOutput(JSON.stringify({status:400, message: "Missing fields in body."})).setMimeType(ContentService.MimeType.JSON);
  }
  if(message.includes("=") || name.includes("=")) {
    return ContentService.createTextOutput(JSON.stringify({status:400, message: "Message/Name cannot contain \"=\""})).setMimeType(ContentService.MimeType.JSON);
  }
  if(message.includes("uoftctf") || name.includes("uoftctf")) {
    return ContentService.createTextOutput(JSON.stringify({status:400, message: "Please dont put flags, thanks."})).setMimeType(ContentService.MimeType.JSON);
  }
  file.getSheetByName("raw").appendRow([name, message]);
  return ContentService.createTextOutput(JSON.stringify({status:200, message: "success"})).setMimeType(ContentService.MimeType.JSON);
}