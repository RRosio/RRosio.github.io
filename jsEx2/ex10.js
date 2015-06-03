function outputURLs () {
  var output = '<ul> \n';
  if (arguments.length > 0) {
    for (var i = 0; i < arguments.length; i++) {
      output += '<li><a href="'+ arguments[i] + '></a></li> \n' ;
    }
    output += '</ul>'
  }
  return console.log(output);
}
outputURLs('http://', 'http://');

/*
  var myElement = document.querySelector('#sofa');
    var newList = document.createElement('ul')
    myElement.appendChild(newList);
    function outputURLs() {
        if (arguments.length > 0) {
            for(var i = 0; i < arguments.length; i++) {
                var newListItem = document.createElement('li');
                newListItem.innerHTML = arguments[i];
                newList.appendChild(newListItem);
            }
        }
    }
    outputURLs('a','b','c','d','e');
*/