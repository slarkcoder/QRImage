var qrstring = new Array()
var serverList = {
  address : ["tw-01.ssv1.tk","jp-01.ssv1.tk","us-01.ssv1.tk"],
  method : ["aes-256-cfb","aes-256-cfb","chacha20"]
};

function generate() {
  for (i = 0; i < serverList.address.length; i++){
    let str = serverList.method[i] + "-auth:" + document.getElementById("password").value + "@" + serverList.address[i] + ":" + document.getElementById("port").value
    let qr = "ss://" + btoa(str)
    qrstring.push(qr)
  }
  makeImage()
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
