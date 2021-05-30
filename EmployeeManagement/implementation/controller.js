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

  console.log('p:' + pathname);
  console.log(queryData);
  console.log('u:' + _url);

  var authority = login_checker.isAuthorized();
  if (authority != true) {
    response.writeHead(404);
    response.end('no Authority');
  }
  else {
    /* // start page
    // In this page you can choose one (employee management or commuting management)
    if(pathname == '/'){ //main
      if(queryData.id == undefined){
          var html = makePage.home();
          response.writeHead(200);
          response.end(html);
      }
    }*/

    // Employee Management main page
    if(pathname == '/employeeManagement') {
      connectDB.request_entire((data)=> {
        var html = makePage.render_dataList(data);
        response.writeHead(200);
        response.end(html);
      });
    }

    // search process
    else if(pathname == '/employeeManagement_search') {
      var body = '';
      request.on('data', function(data) {
        body += data;
      });
      request.on('end', function() {
        var post = qs.parse(body);
        var search_key = post.key;
        if (search_key) {
          connectDB.request_search(search_key, (data) => {
            var html = makePage.render_dataList(data);
            response.writeHead(200);
            response.end(html);
          });
        }
      });
    }

    // input info to add new data
    else if (pathname == '/employeeManagement_input') {
      var html = makePage.render_inputPage();
      response.writeHead(200);
      response.end(html);
    }

    // add process
    else if (pathname = '/employeeManagement_add') {
      console.log('add');
      var body = '';
      request.on('data', function(data) {
        body += data;
      });
      request.on('end', function() {
        var post = qs.parse(body);
        var id = post.id;
        var name = post.name;
        var password = post.password;
        var phoneNUM = post.phoneNUM;
        if (id && name)
        connectDB.request_add(id, name, password, phoneNUM, () => {
          response.writeHead(302, {Location: '/employeeManagement'});
          response.end();
        });
      });
    }
    else {
      response.writeHead(404);
      response.end('Not found')
    }
  }
});

app.listen(2021);
