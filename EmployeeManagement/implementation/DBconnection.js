var mysql = require('mysql');
var db = mysql.createConnection({
  host: 'localhost',
  user: 'SE_user1',
  password: 'mysql2021',
  database: 'SEexample'
});

function request_search(key) {
  db.connect();
  console.log('db connected');
  var cmd = 'SELECT * FROM DataList where name = \'' + key + '\' or id = \'' + key + '\'';
  var res = null;
  var isEmpthy = db.query(cmd, function(error, rows, fields) {
    if (error) {
      //console.log(error);
    }
    db.end();
    if (rows.length == 0) return true;
    res = rows
    return false;
  });
  if ( isEmpthy === false && res != null) return res;
}

module.exports = { request_search };
