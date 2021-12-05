let score = 0;
function func_start(){
	document.getElementById("p1").style.visibility="visible";
	document.getElementById("db").style.visibility="visible";
	document.getElementById("ip1").style.visibility="visible";
}
function func1() {

	var a1 = document.getElementById('t1').value;
	var ans1 = "Akshardham";
	if(a1.trim() == ans1){
	// alert("Very great you are right and can move to the next question!");
	score += 10;
	document.getElementById("p1").style.filter = "none";
	document.getElementById("r_ans1").style.visibility="visible";
	document.getElementById("next_icon1").style.visibility="visible";
	
}
else if(a1.trim() == ""){
	alert("Kindly enter something!");
}
else{
	// alert("So sorry!");
	score -= 5;
	document.getElementById("p1").style.filter = "none";
	document.getElementById("w_ans1").style.visibility="visible";
	document.getElementById("next_icon1").style.visibility="visible";
}

}

function func_next1(){
	document.getElementById("next_icon1").href="#img2";
	document.getElementById("img2").style.visibility="visible";
	document.getElementById("ip2").style.visibility="visible";
	document.getElementById("db2").style.visibility="visible";

}

function func2() {

	var a2 = document.getElementById('t2').value;
	var ans2 = "Gateway of India";
	if(a2.trim() == ans2){
	score += 10;
	document.getElementById("p2").style.filter = "none";
	document.getElementById("r_ans2").style.visibility="visible";
	document.getElementById("next_icon2").style.visibility="visible";
}
else if(a2.trim() == ""){
	alert("Kindly enter something!");
}
else{
	score -= 5;
	document.getElementById("w_ans2").style.visibility="visible";
	document.getElementById("next_icon2").style.visibility="visible";
	document.getElementById("p2").style.filter = "none";
}
}


function func_next2(){
	document.getElementById("next_icon2").href="#img3";
	document.getElementById("img3").style.visibility="visible";
	document.getElementById("ip3").style.visibility="visible";
	document.getElementById("db3").style.visibility="visible";

}

function func3() {

	var a3 = document.getElementById('t3').value;
	var ans3 = "Mysore Palace";
	if(a3.trim() == ans3){
		score += 10;
	// alert("Very great you are right and can move to the next question!");
	document.getElementById("r_ans3").style.visibility="visible";
	document.getElementById("next_icon3").style.visibility="visible";
	document.getElementById("p3").style.filter = "none";
}
else if(a3.trim() == ""){
	alert("Kindly enter something!");
}
else{
	// alert("So sorry!");
	score -= 5;
	document.getElementById("w_ans3").style.visibility="visible";
	document.getElementById("next_icon3").style.visibility="visible";
	document.getElementById("p3").style.filter = "none";
}

}

function func_next3(){
	document.getElementById("next_icon3").href="#img4";
	document.getElementById("img4").style.visibility="visible";
	document.getElementById("ip4").style.visibility="visible";
	document.getElementById("db4").style.visibility="visible";

}

function func4() {

	var a4 = document.getElementById('t4').value;
	var ans4 = "Jama Masjid";
	if(a4.trim() == ans4){
		score += 10;
	// alert("Very great you are right and can move to the next question!");
	document.getElementById("r_ans4").style.visibility="visible";
	document.getElementById("next_icon4").style.visibility="visible";
	document.getElementById("p4").style.filter = "none";
}
else if(a4.trim() == ""){
	alert("Kindly enter something!");
}
else{
	// alert("So sorry!");
	score -= 5;
	document.getElementById("w_ans4").style.visibility="visible";
	document.getElementById("next_icon4").style.visibility="visible";
	document.getElementById("p4").style.filter = "none";
}

}

function func_next4(){
	document.getElementById("next_icon4").href="#img5";
	document.getElementById("img5").style.visibility="visible";
	document.getElementById("ip5").style.visibility="visible";
	document.getElementById("db5").style.visibility="visible";

}

function func5() {

	var a5 = document.getElementById('t5').value;
	var ans5 = "Haridwar";
	if(a5.trim() == ans5){
		score += 10;
	// alert("Very great you are right and can move to the next question!");
	document.getElementById("r_ans5").style.visibility="visible";
	document.getElementById("next_icon5").style.visibility="visible";
	document.getElementById("p5").style.filter = "none";
}
else if(a5.trim() == ""){
	alert("Kindly enter something!");
}
else{
	// alert("So sorry!");
	score -= 5;
	document.getElementById("w_ans5").style.visibility="visible";
	document.getElementById("next_icon5").style.visibility="visible";
	document.getElementById("p5").style.filter = "none";
}

}

function func_next5(){
	document.getElementById("next_icon5").href="#img6";
	document.getElementById("img6").style.visibility="visible";
	document.getElementById("ip6").style.visibility="visible";
	document.getElementById("db6").style.visibility="visible";

}


function func6() {

	var a6 = document.getElementById('t6').value;
	var ans6 = "Charminar";
	if(a6.trim() == ans6){
		score += 10;
	// alert("Very great you are right and can move to the next question!");
	document.getElementById("r_ans6").style.visibility="visible";
	document.getElementById("next_icon6").style.visibility="visible";
	document.getElementById("p6").style.filter = "none";
}
else if(a6.trim() == ""){
	alert("Kindly enter something!");
}
else{
	// alert("So sorry!");
	score -= 5;
	document.getElementById("w_ans6").style.visibility="visible";
	document.getElementById("next_icon6").style.visibility="visible";
	document.getElementById("p6").style.filter = "none";
}

}

function func_next6(){
	document.getElementById("next_icon6").href="#img7";
	document.getElementById("img7").style.visibility="visible";
	document.getElementById("ip7").style.visibility="visible";
	document.getElementById("db7").style.visibility="visible";

}

function func7() {

	var a7 = document.getElementById('t7').value;
	var ans7 = "India Gate";
	if(a7.trim() == ans7){
		score += 10;
	// alert("Very great you are right and can move to the next question!");
	document.getElementById("r_ans7").style.visibility="visible";
	document.getElementById("next_icon7").style.visibility="visible";
	document.getElementById("p7").style.filter = "none";
}
else if(a6.trim() == ""){
	alert("Kindly enter something!");
}
else{
	// alert("So sorry!");
	score -= 5;
	document.getElementById("w_ans7").style.visibility="visible";
	document.getElementById("next_icon7").style.visibility="visible";
	document.getElementById("p7").style.filter = "none";
}

}

function func_next7(){
	document.getElementById("next_icon7").href="#img8";
	document.getElementById("img8").style.visibility="visible";
	document.getElementById("ip8").style.visibility="visible";
	document.getElementById("db8").style.visibility="visible";

}

function func8() {

	var a8 = document.getElementById('t8').value;
	var ans8 = "Qutub Minar";
	if(a8.trim() == ans8){
		score += 10;
	// alert("Very great you are right and can move to the next question!");
	document.getElementById("r_ans8").style.visibility="visible";
	document.getElementById("next_icon8").style.visibility="visible";
	document.getElementById("p8").style.filter = "none";
}
else if(a8.trim() == ""){
	alert("Kindly enter something!");
}
else{
	// alert("So sorry!");
	score -= 5;
	document.getElementById("w_ans8").style.visibility="visible";
	document.getElementById("next_icon8").style.visibility="visible";
	document.getElementById("p8").style.filter = "none";
}

}

function func_next8(){
	document.getElementById("next_icon8").href="#img9";
	document.getElementById("img9").style.visibility="visible";
	document.getElementById("ip9").style.visibility="visible";
	document.getElementById("db9").style.visibility="visible";

}

function func9() {

	var a9 = document.getElementById('t9').value;
	var ans9 = "Meenakshi Temple";
	if(a9.trim() == ans9){
		score += 10;
	// alert("Very great you are right and can move to the next question!");
	document.getElementById("r_ans9").style.visibility="visible";
	document.getElementById("next_icon9").style.visibility="visible";
	document.getElementById("p9").style.filter = "none";
}
else if(a9.trim() == ""){
	alert("Kindly enter something!");
}
else{
	// alert("So sorry!");
	score -= 5;
	document.getElementById("w_ans9").style.visibility="visible";
	document.getElementById("next_icon9").style.visibility="visible";
	document.getElementById("p9").style.filter = "none";
}

}

function func_next9(){
	document.getElementById("next_icon9").href="#img10";
	document.getElementById("img10").style.visibility="visible";
	document.getElementById("ip10").style.visibility="visible";
	document.getElementById("db10").style.visibility="visible";

}

function func10() {

	var a10 = document.getElementById('t10').value;
	var ans10 = "Taj Mahal";
	if(a10.trim() == ans10){
		score += 10;
	// alert("Very great you are right and can move to the next question!");
	document.getElementById("r_ans10").style.visibility="visible";
	document.getElementById("next_icon10").style.visibility="visible";
	document.getElementById("p10").style.filter = "none";
}
else if(a10.trim() == ""){
	alert("Kindly enter something!");
}
else{
	// alert("So sorry!");
	score -= 5;
	document.getElementById("w_ans10").style.visibility="visible";
	document.getElementById("next_icon10").style.visibility="visible";
	document.getElementById("p10").style.filter = "none";
}

}

function func_next10(){
	document.getElementById("next_icon10").href="#img11";
	document.getElementById("img11").style.visibility="visible";
	document.getElementById("ip11").style.visibility="visible";
	document.getElementById("db11").style.visibility="visible";

}

function func11() {

	var a11 = document.getElementById('t11').value;
	var ans11 = "Red Fort";
	if(a11.trim() == ans11){
		score += 10;
	
	document.getElementById("r_ans11").style.visibility="visible";
	document.getElementById("next_icon11").style.visibility="visible";
	document.getElementById("p11").style.filter = "none";
}
else if(a11.trim() == ""){
	alert("Kindly enter something!");
}
else{
	score -= 5;
	document.getElementById("w_ans11").style.visibility="visible";
	document.getElementById("next_icon11").style.visibility="visible";
	document.getElementById("p11").style.filter = "none";
}

}

function func_next11(){
	document.getElementById("next_icon11").href="#img12";
	document.getElementById("img12").style.visibility="visible";
	document.getElementById("ip12").style.visibility="visible";
	document.getElementById("db12").style.visibility="visible";

}

function func12() {

	var a12 = document.getElementById('t12').value;
	var ans12 = "Tirupati";
	if(a12.trim() == ans12){
		score += 10;
	document.getElementById("r_ans12").style.visibility="visible";
	document.getElementById("comp").style.visibility="visible";
	document.getElementById("p12").style.filter = "none";
}
else if(a12.trim() == ""){
	alert("Kindly enter something!");
}
else{
	score -= 5;
	document.getElementById("w_ans12").style.visibility="visible";
	document.getElementById("comp").style.visibility="visible";
	document.getElementById("p12").style.filter = "none";
}

}

function func_result(){
	var name = prompt("Enter your name:", "name");

    alert("Congratulations! "+name+"\nYour score is "+score);
    
}






