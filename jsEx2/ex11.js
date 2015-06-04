/* **************** Example ************* 
var user = {
    name: "Guest",
    askName: function() {
        this.name = prompt("Your name?");
    },
    sayHi: function() {
        alert('Hi, my name is ' + this.name);
    }
};

user.askName();
user.sayHi();
******************************************/
var data = {
    links: [
    {url: 'http://', label: 'planetOfTheWeb'},
    {url: 'http://', label: 'OtherWebSite'},
    {url: 'http://', label: 'SomeOtherWebsite'}
]
    drawLinks: function() {
    var output = '<ul>';
        for (var i = 0; i < links.length; i++)
        {
        	output += '<li><a href="' + this.links[i].url + '">' +this.links[i].label + '</a></li> \n';
        }
        output += '</ul>';
        document.querySelector('#list').innerHTML= output;
        }
};

data.drawLinks();
//Now Try With NODES!!!!