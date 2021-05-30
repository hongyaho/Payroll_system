var template = require('./template.js');

module.exports = {
  inputPage:function() {
    console.log('ok');
    return template.addPage();
  },
  render_dataList:function(data) {
    if(data) {
      var i = 0;
      var text;
      while(i < data.length) {
        text += `<tr><td class="tg-76xw">${data[i].id}</td>
                  <td class="tg-76xw">${data[i].name}</td>
                  <td class="tg-76xw">${data[i].password}</td>
                  <td class="tg-76xw">${data[i].phoneNUM}</td>
                  <td class="tg-76xw">${data[i].working_hours}</td>
                  <td class="tg-76xw">${data[i].pay}</td></tr>`;
        i += 1;
      }
    }
    return template.searchPage(text);
  },
  /*render_searchData:function(data) {
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
  },*/
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
