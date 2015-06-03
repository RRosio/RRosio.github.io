function getDateImage ()
{
	var today = new Date();
	var weekdays = ['Sunday', 'Monday', 'Tuesday', 'images/fantasy_space.jpg', 'Thursday', 'Friday', 'Saturday'];

	console.log(weekdays[today.getDay()]);

	var myNode= document.querySelector('body');
	myNode.style.backgroundImage = 'url('+ weekdays[today.getDay()] + ')';

}

getDateImage();
