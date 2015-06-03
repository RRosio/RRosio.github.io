document.querySelector("#myBtn").addEventListener("click", myfunction, false);

var myLinks = ['https://www.facebook.com', 'Facebook', 'https://www.pinterest.com', 'Pinterest', 'https://www.tumblr.com', 
'Tumblr', 'https://instagram.com', 'Instagram', 'https://twitter.com', 'Twitter'];

function myfunction(e) {
	var output= '';
	var num = Math.round(Math.random()* 9);
	console.log(num);
	if (num % 2 === 0)
	{
		output += '<a href= "' + myLinks[num] + '">' + myLinks[num + 1] + '</a> \n';
		console.log(output);
	}	
	else 
	{
		myfunction();
	}

}