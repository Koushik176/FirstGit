var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

var newDiv = document.createElement('input');
newDiv.className = 'form-control mr-2';
newDiv.id = 'item-description';
newDiv.setAttribute('type', 'text');

var container = document.querySelector('#addForm');
var type1 = document.querySelector('.btn');
container.insertBefore(newDiv, type1);



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
    var newItemDis = document.getElementById('item-description').value;

    //create new li element
    var li = document.createElement('li'); 
    //add class Name
    li.className = 'list-group-item';
    
    //add text Node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createElement('br'));
    li.appendChild(document.createTextNode(newItemDis));
    
    
    

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
        var itemDes = item.childNodes[2].textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 ||
        itemDes.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
}