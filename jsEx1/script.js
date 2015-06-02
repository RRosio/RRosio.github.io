/*  var linkArray= ['https://www.facebook.com', 'https://www.pinterest.com', 'https://www.tumblr.com', 
'https://instagram.com', 'https://twitter.com'];

var iconArray=["fa fa-facebook", "fa fa-pinterest", "fa fa-tumblr", "fa fa-instagram", "fa fa-twitter-square"];

console.log('<ul>');
for(var i=0;i<linkArray.length;i++)
{
   console.log(<li><a href=linkArray[i] <i class=iconArray[i]</i></a></li>);
}
console.log('</ul>');

*/
  
  /*
var linkArray= ['https://www.facebook.com', 'https://www.pinterest.com', 'https://www.tumblr.com', 
'https://instagram.com', 'https://twitter.com'];

var iconArray=["facebook", "pinterest", "tumblr", "instagram", "twitter-square"];

console.log('<ul>');
for(var i = 0; i<linkArray.length; i++)
{
   console.log('<li><a href="' + linkArray[i] + '">' + '<i class="fa fa-' + iconArray[i] + '">' + '</i></a></li>');
}
console.log('</ul>');
*/

/***********  
WORKING CODE
var linkArray= ['https://www.facebook.com', 'https://www.pinterest.com', 'https://www.tumblr.com', 
'https://instagram.com', 'https://twitter.com'];

var iconArray=["facebook", "pinterest", "tumblr", "instagram", "twitter-square"];

var output = '<ul>';
for(var i = 0; i<linkArray.length; i++)
{
   output += '<li><a href="' + linkArray[i] + '">' + '<i class="fa fa-' + iconArray[i] + '">' + '</i></a></li>';
}
output += '</ul>';
console.log(output);
***********

<div class="item"></div>


***************/
var myLinks = {
	facebook: 'https://www.facebook.com', 
	pinterest: 'https://www.pinterest.com', 
	tumblr: 'https://www.tumblr.com', 
	instagram: 'https://instagram.com', 
	twitter: 'https://twitter.com'
};

var output = '<ul>';
for (var index in myLinks)
{
	output += '<a href="' + myLinks[index] + '">' + index + '\n';
}
output += '</ul>';

var myNode = document.querySelector(".item");
myNode.innerHTML = output;
myNode.className = 'myclass';
myNode.id = 'myID';
myNode.style.color = '#FCC';
myNode.style["font-family"] = "Helvetica";
myNode.style.fontSize = '3em';

/*

var info = {
 name: "Ray Villalobos",
 age: 48,
 jarjar: false,
 movies: ['Star Wars', 'Star Trek', 'Galaxy Quest']
};

console.log(info.name);
console.log(info.age);

if (info.jarjar) {
 console.log('Love Jar Jar');
} else {
 console.log('Han should have shot Jar Jar');
}

console.log('');

for (i = 1; i<info.movies.length; i++) {
 console.log(info.movies[i]);
}

info.company = 'Lynda.com';

console.log(info);

var linkInfo= {
    linkArray:  ['https://www.facebook.com', 'facebook', 'https://www.pinterest.com', 'Pinterest', 'https://www.tumblr.com', 'Tumblr', 'https://instagram.com', 'Instagram', 'https://twitter.com', 'Twitter']
};

var output = '<ul>';
for(var i = 0; i< linkInfo.linkArray.length; i+=2)
{
   output += '<li><a href="' + linkInfo.linkArray[i] + '">' + '<i class="fa fa-' + linkArray[i+1] + '">' + '</i></a></li>';
}
output += '</ul>';
console.log(output);


for (var index in linkInfo.linkArray)
{
  console.log('Index: ' + index + '\n' + 'Value: '  + linkInfo.linkArray[index] + '\n');  
}






var info = {
  full_name : "Ray Villalobos",
  links : {
    blog     : "http://raybo.org", 
    facebook : "http://facebook.com/iviewsource",
    blog1     : "http://raybo.org", 
    facebook1 : "http://facebook.com/iviewsource",
  }
};

for (var index in info.links) {
  if (info.links.hasOwnProperty(index)) {
    console.log("Index: " + index + " Value: " + info.links[index] + "\n");
  }
}

for (var index in info.links) 
{
    if (info.links.hasOwnProperty(index)) {
    console.log("<a href= \"" + info.links[index]  + '">' + index + '</a>' +           "\n");
  }
}

var info = {
  full_name : "Ray Villalobos",
  title : "Staff Author",
  links : [
      { name: "podcast",  url : "http://feeds.feedburner.com/authoredcontent"},
      { name: "twitter", url: "http://twitter.com/planetoftheweb" }
    ]
  }
};
console.log(info.links.blog);

*/
















/*

Example: A
var myNode = document.querySelectorAll('li'); //***** Select all the 'li' tags

for(var i = 0; i<myNode.length; i++) 		  //***** Loop through the  array of the 'li' tags
{
	myNode[i].className = 'c1'; 			  //***** change the class of the 'li' tags
}

*/
