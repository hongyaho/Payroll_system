module.exports = {
  home:function() {
    return `
    <!doctype html>
    <html>
    <head>
      <title>HOME</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/employeeManagement">직원관리</a></h1>
      <h1><a href="/commutingInfo">출퇴근관리</a></h1>
    </body>
    </html>
    `
  },
  render_dataList:function() {
    return `
    <!doctype html>
    <html>
    <head>
      <title>Employee Management</title>
      <meta charset="utf-8">
    </head>
    <body>
      <form action = "https://localhost:2021/?id=employeeManagement/search" method="post">
        <input type = "text" name="key" placeholder="id or name">
        <input type = "submit">
      </form>
      <li><a href = "add.html">추가</a><li>
    </body>
    </html>
    `
  },
  render_searchData:function(data) {
    return `
    <!doctype html>
    <html>
    <head>
      <title>직원 상세 정보</title>
      <meta charset="utf-8">
    </head>
    <body>
      <li>ID: ${data.id}</li>
      <li>name: ${data.name}</li>
      <li>password: ${data.password}</li>
      <li>working_hours: ${data.working_hours}</li>
      <li>pay: ${data.pay}</li>
      <h1><a href="/">OK</a></h1>
    </body>
    </html>
    `;
  },
  warning:function(err_msg) {
    return `
    <!doctype html>
    <html>
    <head>
      <title>ERROR</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1>ERROR - ${err_msg}<h1>
      <h3><a href="/">OK</a></h3>
    </body>
    </html>
    `
  }
}
