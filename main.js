//javaScript code for slideshow
var i=0;
var images=[];
var time=3000;

//Image List
images[0]='f9.jpg';
images[1]='f2.jpg';
images[2]='f3.jpg';

//change Image
function changeImg(){
  document.slide.src=images[i];

if(i<images.length-1){
  i++;
}
else{
i=0;
}

setTimeout("changeImg()",time);
}

window.onload=changeImg;

//Javascript for Readmore
function myFunction(){
  var dots=document.getElementById("dots");
  var moretext=document.getElementById("more");
  var btnText=document.getElementById("myBtn");
   
if(dots.style.display=="none"){
  dots.style.display="inline";
  btnText.innerHTML="Read more";
  moretext.style.display="none";
}
else{
  dots.style.display="none";
  btnText.innerHTML="Read less";
  moretext.style.display="inline";
}
}