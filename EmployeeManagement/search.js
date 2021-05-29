module.exports = {
  search_name:function(data, key) {
    var i = 0;
    while(i < data.length){
      if(key == ${data[i].name}) {
        return
      }
      list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
      i = i + 1;
    }
  }
