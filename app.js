var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click', removeItem);
// filter event
filter.addEventListener('keyup', filterItems);

//additem
function addItem(e){
    e.preventDefault();
    
    //get input value
    var newItem = document.getElementById('item').value;

    //create new li element
    var li = document.createElement('li');
    //add class Name
    li.className = 'list-group-item';
    //add text Node with input value
    li.appendChild(document.createTextNode(newItem));

    // create del button element

    var deleteBtn = document.createElement('button');

    //add classes to deletBtn
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //append Text Node
    deleteBtn.appendChild(document.createTextNode('X'));

    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-grey btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('edit'));

    //append button to li
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

    //append li to list
    itemList.appendChild(li);


}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        var li = e.target.parentElement;
        if(confirm('Are you sure you want to delete ' +li.textContent)){
            itemList.removeChild(li);
        }
    }
}

//filter items
function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    // get lis
    var items = itemList.getElementsByTagName('li');
    // convert to arrays
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
}