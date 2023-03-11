var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'grey';
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'grey';
// console.log(itemList.parentElement.parentNode);

//childNode
//console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

//firstChild
// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'hello';

// create a div
var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title', 'Hello Div');

var newDivText = document.createTextNode('Hello World');

newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
newDiv.style.fontSize = '30px';
container.insertBefore(newDiv, h1);

var newDiv2 = document.createElement('div');
var newDivText2 = document.createTextNode('Hello Wolrd');

newDiv2.appendChild(newDivText2);
var container2 = document.querySelector('.list-group');
var h2 = document.querySelector('.list-group-item');

container2.insertBefore(newDiv2, h2);

