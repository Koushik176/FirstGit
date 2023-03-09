// EXAMINE THE DOCUMENT OBJECT //
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

const headerTitle = document.getElementById('header-title');
const header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px black';
const addItem = document.getElementsByClassName('title');
addItem[0].style.fontWeight = 'bold';
addItem[0].style.color = 'green';