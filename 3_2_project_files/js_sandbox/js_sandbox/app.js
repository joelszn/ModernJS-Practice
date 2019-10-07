// document.getElementbyId()
// console.log(document.getElementById('task-title'));

// // get things from the element
// console.log(document.getElementById('task-title').id);

// console.log(document.getElementById('task-title').className);

// // learn again what the new let const vars are
// const taskTitle = document.getElementById('task-title');

// // change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// document.getElementById('task-title').style.display = 'none';

// change content
// taskTitle.textContent = 'Task List';

// taskTitle.innerText = 'Task List';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';


// document.querySelector()

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// // CSS3 lets you pick nth child from a list
// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'I changed this';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';



//  document.getElementsByClassName
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'red';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);




// document.getElementbyTagName same thing just selecting by the tag name
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'word';

// // Convert HTML collection into array
// lis = Array.from(lis);

// lis.reverse();

// // lis.forEach(function)
// console.log(lis);


// QUERY SELECTOR ALL

// const items = document.querySelectorAll('ul.collection.li.collection-item');

// items.forEach(function(item, index){
//     item.textContent = `${index}: Hello`;
    
// });

// const liOdd = document.querySelectorAll('li.nth-child(odd)');
// const liEven = document.querySelectorAll('li.nth-child(even)');

// for(let i = 0; i < liEven.length; i++) {
//     liEven[i].style.background = '#f4f';
// }


// console.log(items);



// GET ELEMENTS BY CLASS NAME

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// GET ELEMENTS BY TAGNAME
// let lis = document.getElementsByTagName('li');
// console.log(lis);

// console.log(lis[4]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Test';

// // Convert HTML Collection into array
// lis = Array.from(lis);

// lis.reverse(); // this alone will give you an error because html collection is not an arr
// console.log(lis);

// query selector all

// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item, index) {
//     item.textContent = `$`
// }
// )

// console.log(items);


// TRAVERSING THE DOM

// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');


// // get child nodes
// val = list.childNodes;
// // val = list.childNodes[0];
// // val = list.childNodes[0].nodeName;
// val = list.childNodes[3].nodeType;

// // Node Types
// // 1 - element
// // 2 - attribute (deprecated))
// // 3 - Text node
// // 8 - comment
// // 9 - Document itself
// // 10 - Doctype

// // will use this more
// // get children element nodes
// val = list.children;
// val = list.children[0];

// // get nested children
// list.children[3].children;
// list.children[3].children[0].id = 'test-link';

// val = list.firstChild;
// val = list.firstElementChild;
// // same for last child

// // count child els
// val = list.childElementCount;

// // get parent node
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentNode.parentElement;



// console.log(val);


// Creating DOM elements

const li = document.createElement('li');

// add class
li.className = 'collection-item';

// add id 
li.id = 'new-item';

// add attribute
li.setAttribute('title', 'New Item');

// create text node and append
li.appendChild(document.createTextNode('Hello JS'));

const redX = document.createElement('a');

redX.className = 'delete-item secondary-content';
// add icon html
redX.innerHTML = '<i class="fa fa-remove"></i>';

// append red x example
li.append(redX);

// append li as child to ul

document.querySelector('ul.collection').appendChild(li);

console.log(li);






