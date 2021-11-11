/*var intro1= document.getElementById("into1");

var mesaj=document.getElementById("mesaj")

mesaj.innerHTML=intro1.innerHTML;

var tumliste=document.getElementsByTagName("ul");

var sehirler=tumliste[0]

tumelemanler=sehirler.getElementsByTagName("li"); 

var classElemanları= document.getElementsByClassName("intro1");

alert(classElemanları[0].innerHTML); */

//var queryElemamları= document.querySelectorAll("p.into1");
//alert(queryElemamları.le

// var isimElemanları=document.getElementsByName("musteriAdi");
// alert(isimElemanları[0].value);

// var ayca=document.getElementById("ayca").addEventListener("click", rengiDegistir);

// function rengiDegistir(){
//     document.getElementById("ayca").style.color="red";
// }

// var node=document.getElementById("agac");
// alert(node.childNodes[0].node);

var baslik=document.createElement("h2");
var node=document.createTextNode("MErhaba js");
baslik.appendChild(node);

var div1=document.getElementById("div1")
var p2=document.getElementById("p2")
div1.insertBefore(baslik,p2);


alert("p2 silniyor");
div1.removeChild(p2);

alert("yer degisiyor")
var p1=document.getElementById("p1")
div1.replaceChild(baslik,p1)


