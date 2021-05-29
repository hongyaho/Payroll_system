var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

var login_checker = require('./login_checker.js');
var connectDB = require('./DBconnection.js');
var makePage = require('./pageMaker.js');

var app = http.createServer(function(request,response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;


  if(pathname == '/'){ //main
    if(queryData.id == undefined){
        var html = makePage.home();
        response.writeHead(200);
        response.end(html);
    }
  }

  else if(pathname == '/employeeManagement') {
    var html = makePage.render_dataList();
    response.writeHead(200);
    response.end(html);
  }

  else if(pathname == '/employeeManagement/search') {
    var authority = login_checker.isAuthorized();

    var key = 'apa';
    if (authority == true) {
      var data = connectDB.request_search(key);
      if (data) {
        var html = makePage.render_searchData(data);
      }
      else {
        var html = makePage.warning('err_noData');
      }
    }
    else {
      var html = makePage.warning('err_notAuthorized');
    }
    response.writeHead(200);
    response.end(html);

  }
  else {
    response.writeHead(404);
    response.end('Not found')
  }
});

app.listen(2021);
