// EXAMINE THE DOCUMENT OBJECT //
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

const items = document.getElementsByTagName('li');
items[4].style.background = 'green';

for(var i = 0; i < items.length; i++)
{
    items[i].style.fontWeight = 'bold';
}