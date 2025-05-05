var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.form;
handle["/form"] = requestHandlers.form;
handle["/dados"] = requestHandlers.dados;

server.form(router.route, handle);
