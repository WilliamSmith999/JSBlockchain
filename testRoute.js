var url = require('url');

module.exports = {
	handleRequest: function(request, response){
	response.writeHead(200, {'Content-Type': 'text/html'});
	var path = url.parse(request.url).pathname;
		switch(path){
			case '/' :
				response.write("Home test pass");
				break;
			case '/Add':
				response.write('Test 1 pass');
				break;
			case '/list':
				break;
			case '/rollCall':
				break;
			default:
				response.writeHead(404);
				response.write('Route not defined');
				response.end();
		}
	}
};
