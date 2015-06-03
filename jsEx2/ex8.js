function getDate ()
{
	var today = new Date();
	var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	console.log(weekdays[today.getDay()]);
	// Chose one of the following three options -->
	// document.getElementById('heading1').innerHTML = weekdays[today.getDay()];
	// document.querySelector('h1').innerHTML = (weekdays[today.getDay()]);
	document.querySelectorAll('h1')[0].innerHTML = (weekdays[today.getDay()]);

	
		//How to do it with a node????

}
getDate();


/* *********Or do it with this but get name of day instead ***************
function getDateImage ()
{
	var today = new Date();
	var weekdays = ['Sunday', 'Monday', 'Tuesday', 'images/fantasy_space.jpg', 'Thursday', 'Friday', 'Saturday'];

	console.log(weekdays[today.getDay()]);

	var myNode= document.querySelector('body');
	myNode.style.backgroundImage = 'url('+ weekdays[today.getDay()] + ')';

}

getDateImage();

*/