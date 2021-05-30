var template = require('./template.js');

module.exports = {
  // input info to add new data
  render_inputPage:function() {
    return template.inputPage();
  },

  // display entire of searched data list
  render_dataList:function(data) {
    if(data) {
      var i = 0;
      var text = '';
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

  // when error happens
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
