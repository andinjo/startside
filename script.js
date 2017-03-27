var timedate;

function greeting() {
	timedate = new Date();
	var time = timedate.getHours();
	if(time < 6) {
		document.write("You Really should be sleeping at this moment!");
	} else if(time < 12) {
		document.write("Good morning Vietnam! How are you this fine morning?");
	} else if(time < 18) {
		document.write("Good afternoon! I hope your studies are going fantastic");
	} else if(time < 22){
		document.write("Good evning! I will be quiet for your own good");
	} else {
		document.write("It's pretty much bedtime. Why are you still awake?");
	}
}

function displayTime() {
	timedate = new Date();
	var hours = timedate.getHours();
	var minutes = timedate.getMinutes();
	var seconds = timedate.getSeconds();
	minutes = checkTime(minutes);
	seconds = checkTime(seconds);
	document.getElementById('clockcontrol').innerHTML = hours + ":" + minutes + ":" + seconds;
	var t = setTimeout(displayTime, 500);
}

function checkTime(i) {
	if(i < 10) {i = 0 + i};
	return i;
}