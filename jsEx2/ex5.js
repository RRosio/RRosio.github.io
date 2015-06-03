/*  *************Redo of a previous exercise- works wonderfully*******************
var myNode = document.querySelector('.item');
var myImages = [
	'http://lorempixel.com/output/city-q-c-640-480-7.jpg',
	'http://lorempixel.com/output/animals-q-c-640-480-7.jpg',
	'http://lorempixel.com/output/abstract-q-g-640-480-9.jpg',
	'http://lorempixel.com/output/abstract-q-c-640-480-5.jpg',
	'http://lorempixel.com/output/city-q-g-640-480-2.jpg',
	'http://lorempixel.com/output/people-q-g-640-480-5.jpg',
	'http://lorempixel.com/output/technics-q-g-640-480-4.jpg',
	'http://lorempixel.com/output/cats-q-c-640-480-8.jpg',
	'http://lorempixel.com/output/nature-q-c-640-480-1.jpg',
];

for (var i = 0; i < myImages.length; i++)
{
	var myElement = document.createElement('img');
	myElement.src = myImages[i];
	myElement.alt = 'Images ' + i;
	myElement.style.borderRadius = '10px';
	myElement.className= 'bigger';
	myNode.appendChild(myElement);
}
*/

/*  ************DOESNT WORK DON'T KNOW HOW TO MAKE IT WORK *****************
var myNode = document.querySelector('.item');
var myImages = [
	'http://lorempixel.com/output/city-q-c-640-480-7.jpg',
	'http://lorempixel.com/output/animals-q-c-640-480-7.jpg',
	'http://lorempixel.com/output/abstract-q-g-640-480-9.jpg',
	'http://lorempixel.com/output/abstract-q-c-640-480-5.jpg',
	'http://lorempixel.com/output/city-q-g-640-480-2.jpg',
	'http://lorempixel.com/output/people-q-g-640-480-5.jpg',
	'http://lorempixel.com/output/technics-q-g-640-480-4.jpg',
	'http://lorempixel.com/output/cats-q-c-640-480-8.jpg',
	'http://lorempixel.com/output/nature-q-c-640-480-1.jpg',
];
var numsUsed = [];

for (var i = 0; i < myImages.length; i++)
{
	var num = Math.round(Math.random()* myImages.length);
	if (numsUsed.length === 0)
	{
		var numsUsed += num;
	}
	else 
	{
		for (var i = 0; i < numsUsed.length; i++)
		{
			if (num === numsUsed[i])
			{
				return;
			}
			else
			{

			}

		}
	}
}


var myElement = document.createElement('img');
myElement.src = myImages[num];
myElement.alt = 'Image';
myElement.style.borderRadius = '10px';
myElement.className= 'bigger';
myNode.appendChild(myElement);
*/

var myArray = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var originalQty = myArray.length;
var tempArray =[], finalArray = [];

for (i=0; i<originalQty; i++) {
 myRandom = Math.floor(Math.random()*myArray.length);
 tempArray = myArray.splice(myRandom,1);
 finalArray.push(tempArray[0]);
}
console.log(finalArray);








