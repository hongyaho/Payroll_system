
module.exports = {
  searchPage:function(text) {
    return `
    <html>
    <head>
    	<title>직원 검색</title>
    	<meta charset="utf-8">
    </head>
    <body>
    <center>
    <h1>직원 관리 시스템</h1>
    <div class='s1' align="left">
      <input type = "button" value = "HOME" onclick="location.href = '/employeeManagement'"
      style="font-size: 1.5em; background-color: rgb(180, 180, 180); padding: 10px 40px 10px 40px;"/>
    </div>
    <br>
    <div class='s1'>
    	<form method="post">
        <input type="text" name = "key" placeholder="id or name" inform="inform" style="width:450px;height:60px;font-size:30px;"/>
        <input type = "submit" value = "SEARCH" onclick = "javascript: form.action = '/employeeManagement_search';"
          style="font-size: 1.5em; background-color: rgb(180, 180, 180); padding: 10px 40px 10px 40px;"/>
        <input type = "button" value = "ADD" onclick="location.href ='/employeeManagement_input'"
      	  style="font-size: 1.5em; background-color: rgb(180, 180, 180); padding: 10px 40px 10px 40px;"/>
    	</form>
    </div>
    <br>
    <style type="text/css">
      .tg  {border-collapse:collapse;border-color:#aabcfe;border-spacing:0;}
      .tg td{background-color:#e8edff;border-color:#aabcfe;border-style:solid;border-width:1px;color:#669;
        font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:50px 50px;word-break:normal;}
      .tg th{background-color:#b9c9fe;border-color:#aabcfe;border-style:solid;border-width:1px;color:#039;
        font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
      .tg .tg-wpsg{background-color:#6665cd;border-color:#000000;color:#000000;font-weight:bold;text-align:center;vertical-align:top}
      .tg .tg-76xw{background-color:#cbcefb;border-color:#000000;color:#000000;text-align:center;vertical-align:top}
      </style>
      <table class="tg">
      <thead>
        <tr>
          <th class="tg-wpsg">ID<br></th>
          <th class="tg-wpsg">이름</th>
          <th class="tg-wpsg">전화번호</th>
          <th class="tg-wpsg">비밀번호</th>
          <th class="tg-wpsg">급여</th>
          <th class="tg-wpsg">급여옵션</th>
        </tr>
      </thead>
      <tbody>
        ${text}
      </tbody>
      </table>
    </center>
    </body>
    </html>
    `;
  },

  inputPage:function() {
    return `
    <html>
    <head>
    	<title>직원 추가</title>
    	<meta charset="utf-8">
    </head>
    <body>
    <center>
    <h1>직원 추가</h1>
    <br>
    <style type="text/css">
    .tg  {border-collapse:collapse;border-color:#aabcfe;border-spacing:0;}
    .tg td{background-color:#e8edff;border-color:#aabcfe;border-style:solid;border-width:1px;color:#669;
      font-family:Arial, sans-serif;font-size:23px;overflow:hidden;padding:50px 50px;word-break:normal;}
    .tg th{background-color:#b9c9fe;border-color:#aabcfe;border-style:solid;border-width:1px;color:#039;
      font-family:Arial, sans-serif;font-size:23px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
    .tg .tg-wpsg{background-color:#6665cd;border-color:#000000;color:#000000;font-weight:bold;text-align:center;vertical-align:top}
    .tg .tg-76xw{background-color:#cbcefb;border-color:#000000;color:#000000;text-align:left;vertical-align:top}
    </style>
    <table class="tg">
    <thead>
      <tr>
        <th class="tg-wpsg" name = "id">ID<br></th>
        <th class="tg-wpsg" name = "name">이름</th>
        <th class="tg-wpsg" name = "phoneNUM">전화번호</th>
        <th class="tg-wpsg" name = "password">비밀번호</th>
        <th class="tg-wpsg" name = "pay">급여</th>
        <th class="tg-wpsg" name = "option">급여옵션</th>
      </tr>
    </thead>
    <form method = "post">
    <tbody>
      <tr>
        <td class="tg-76xw"><input type="text" size=7></td>
        <td class="tg-76xw"><input type="text" size=7></td>
        <td class="tg-76xw"><input type="text" size=7></td>
        <td class="tg-76xw"><input type="text" size=7></td>
        <td class="tg-76xw"><input type="text" size=7></td>
        <td class="tg-76xw"><input type="text" size=7></td>
      </tr>
    </tbody>
    </table>
    </center>
    <br><br>
    <div class='s1' align="right">
        <input type = "button" value = "취소" onclick="location.href ='/employeeManagement'"
          style="font-size: 1.5em; background-color: rgb(180, 180, 180); padding: 10px 40px 10px 40px;"/>
        <input type = "button" value = "확인" onclick = "javascript: form.action = '/employeeManagement_add';"
          style="font-size: 1.5em; background-color: rgb(180, 180, 180); padding: 10px 40px 10px 40px;"/>
    </div>
    </form>


    </body>
    </html>`
  }
}