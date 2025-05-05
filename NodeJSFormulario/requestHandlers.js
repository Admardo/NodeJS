var querystring = require("querystring");

function form(response, postData) {
 
     var form = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/dados" method="post">'+
        'Nome: <input type="text" name="nome" rows="10" cols="30"></input><p>'+
        'CPF: <input type="text" name="cpf" rows="10" cols="30"></input><p>'+
        'E-Mail: <input type="text" name="email" rows="10" cols="30"></input><p>'+
        '<input type="submit" value="Enviar" />'+
        '</form>'+
        '</body>'+
        '</html>';
 
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(form);
      response.end();
}

function dados(response, postData) {
 
     var dados = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<table>'+
        '<caption>Dados do Formulário</caption>'+
	    '<tr>'+
	    '<th>Nome</th>'+
	    '<th>CPF</th>'+
	    '<th>E-Mail</th>'+
	   	'</tr>'+
	   	'<tr>'+
        '<td>'+querystring.parse(postData).nome+'</td>'+
        '<td>'+querystring.parse(postData).cpf+'</td>'+
        '<td>'+querystring.parse(postData).email+'</td>'+
        '</tr>'+
        '</body>'+
        '</html>';
 
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(dados);
      response.end();
}

exports.form = form;
exports.dados = dados;
