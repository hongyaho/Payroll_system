var mysql = require('mysql');
var db = mysql.createConnection({
  host: 'localhost',
  user: 'SE_user1',
  password: 'mysql2021',
  database: 'SEexample'
});

var makePage = require('./pageMaker.js');

function checker(data, callback) {
  //console.log(data);
  if (data == undefined) {
    console.log('?');
    callback( null);
  }
  else callback(data);
}

// for UC4 SEARCH
// connect to Database by MySql
function select_data(sql, callback) {
  //db.connect();
  //conclose.log('db connected');

  var data;
  db.query(sql, function(error, rows, fields) {
    //db.end();

    //conclose.log('db disconnected');
    if (error) throw(error);

    checker(rows, (res) => { data = res; } );
  });

  setTimeout(()=>{ callback(data); }, 100);

}

// be asked to show the entire list
// make SQL command to use in MySql
function request_entire(callback) {
  var sql = 'SELECT * FROM DataList;';
  select_data( sql, (res)=>{ callback(res); } );
}

// be asked to show the certain data list
// make SQL command to use in MySql
function request_search(key) {
  var sql = 'SELECT * FROM DataList where name = \'' + key + '\' or id = \'' + key + '\'';
  select_data( sql, (res)=>{ callback(res); } );
}

function request_add(id, name, password, phoneNUM, working_hours, pay) {

}

module.exports = { request_entire,
                   request_search,
                   request_add };
