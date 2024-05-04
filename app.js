var time = document.getElementsByTagName('h1')[0]
var second=0;
var minute=0;
var hour=0;
var olEl = document.getElementsByTagName('ol')[0]
function watch(){
	second++;
	if(second>59){
		minute++;
		second = 0;
	}
	if(minute>59){
		hour++;
		minute = 0;
	}
	var s = second<10 ? "0"+second : second;
	var m = minute<10 ? "0"+minute : minute;
	var h = hour<10 ? "0"+hour : hour;
	time.innerText=h+":"+m+":"+s;
}
var up;
function start(){
	up=setInterval(watch,1000);
	document.querySelector(".start").disabled=true;
	document.querySelector(".stop").disabled=false;
}
function stop(){
	clearInterval(up);
	document.querySelector(".start").disabled=false;
	document.querySelector(".stop").disabled=true;
}
function reset(){
	document.querySelector(".start").disabled=false;
	clearInterval(up);
 second=0;
 minute=0;
 hour=0;
time.innerText = "00:00:00";
olEl.innerText="";
}
function lap(){
	var liEl = document.createElement('li');
	liEl.innerText=time.innerText;
	olEl.append(liEl);
}