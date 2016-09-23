var qrstring = new Array()
var serverList = {
  address : ["tw-01.ssv1.tk","jp-01.ssv1.tk","us-01.ssv1.tk"],
  method : ["aes-256-cfb","aes-256-cfb","chacha20"]
};

function generate() {
  if (document.getElementById("port").value.length == 0) {
    $(document).ready(function(){
      $("#alert").text("端口不能为空");
      $("#alert").show();
    });
  }else if (document.getElementById("password").value.length == 0) {
    $(document).ready(function(){
      $("#alert").text("密码不能为空");
      $("#alert").show();
    });
  }else{

    for (i = 0; i < serverList.address.length; i++){
      let str = serverList.method[i] + "-auth:" + document.getElementById("password").value + "@" + serverList.address[i] + ":" + document.getElementById("port").value
      let qr = "ss://" + btoa(str)
      qrstring.push(qr)
    }
    makeImage()

    $(document).ready(function(){
      $("#alert").text("密码不能为空");
      $("#alert").hide();
    });
  }
}

function loadJson(){
  $.getJSON('rescource/server.json',function (data) {
    var tr;

    $.each (data,function(i,item))

    for (var i = 0; i < data.length; i++) {

      console.log(data[i].name);

      tr = $('<tr/>');
      tr.append("<td>" + data[i].name + "</td>");
      tr.append("<td>" + data[i].address + "</td>");
      tr.append("<td>" + data[i].method + "</td>");
      $('table').append(tr);
    }
  });
}

function makeImage(){
  for (i = 0; i < qrstring.length; i++) {
    jQuery('#qrcode').qrcode({
      render: "table", //table方式
      width: 250, //宽度
      height:250, //高度
      text: qrstring[i]
    });
  }
}

loadJson()
