//document.querySelector('.boxes').addEventListener('click',
//   myFunction, false);
/*document.querySelector('.boxes').addEventListener('click', function() 
{
	var a = '';
	e.target.id= a;

	if (a=== '';1)
  	{
  		e.target.id='blue';
  	}
  	else
  	{
  		e.target.id='pink';
  	} 
}, false);
*/

var boxes = document.querySelectorAll("div.box");
for(var x=0; x<boxes.length; x++)
{
  boxes[x].addEventListener("click", function(e) {
  	if (this.target.id === 'pink')
  	{
    	this.target.id = 'blue';
	}
	else 
	{
		this.target.id = 'pink';
	}
  });
}

/* function myFunction(e) {
  if (e.target.id==='pink')
  {
  	e.target.id='blue';
  }
  else
  {
  	e.target.id='pink';
  }
}
*/

