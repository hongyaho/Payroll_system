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

    // search
    else if(pathname == '/employeeManagement/search') {
      console.log('ok');
      /*
      console.log(key);
      //var key = 'aaa';
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
      }*/
      response.writeHead(200);
      response.end('ok');

    }

    //ADD
    else if (pathname == 'employeeManagement/add') {
      console.log('add');
      var html = makePage.inputPage();
      response.writeHead(200);
      response.end(html);
    }
    else {
      response.writeHead(404);
      response.end('Not found')
    }
  }
});

app.listen(2021);
