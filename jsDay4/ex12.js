function isEven () {
	var a = prompt('Please enter a number: ');
	if (a % 2 === 0)
	{
		return true;
	}
	else
	{
		return false;
	}
}
var x = isEven();
console.log(x);

var myNode =document.querySelector('body');
var paragraph = document.createElement('p');
myNode.appendChild(paragraph);
paragraph.innerHTML=x;
