var http = require("http");
var url = require("url");

function form(route, handle) {
    function onRequest(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;

    request.setEncoding("utf8");

    request.addListener("data", function(postDataChunk) {
    postData += postDataChunk;
    console.log("Dados Enviados '"+postDataChunk);
 });
 
    request.addListener("end", function() {
    route(handle, pathname, response, postData);
    });
 }
 
 http.createServer(onRequest).listen(8888);
 console.log("Carregando Formulário");
 }
 
 exports.form = form;
