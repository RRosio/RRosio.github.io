/* 
 var myListItems = document.querySelectorAll('li');

function popUp(event) {
    if (event.target.id == '1') {
        alert('you clicked info 01');
    } else if (event.target.id == '2') {
        alert('you clicked info 02');
    } else if (event.target.id == '3') {
        alert('you clicked info 03');
    } else if (event.target.id == '4') {
        alert('you clicked info 04');
    } else {
        alert('not sure what you clicked');
    }
}

for (var i = 0; i < myListItems.length; i++) {
        myListItems[i].addEventListener('click', popUp, false);
    }
*/


/*
How would I do this same thing with this array 
var myNav = {
    'Info 01',
    'Info 02',
    'Info 03',
    'Info 04'
}
*/


var myListItems = document.querySelectorAll('li');

for (var i = 0; i < myListItems.length; i++) {
        myListItems[i].addEventListener('click', popUp, false);
}

function popUp(event) {
    if (event.target.id == '1') {
        alert('you clicked info 01');
    } else if (event.target.id == '2') {
        alert('you clicked info 02');
    } else if (event.target.id == '3') {
        alert('you clicked info 03');
    } else if (event.target.id == '4') {
        alert('you clicked info 04');
    } else {
        alert('not sure what you clicked');
    }
}
