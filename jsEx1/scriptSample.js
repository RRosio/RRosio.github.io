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


