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

const items = document.querySelectorAll('ul.collection.li.collection-item');

items.forEach(function(item, index){
    item.textContent = `${index}: Hello`;
    
});

const liOdd = document.querySelectorAll('li.nth-child(odd)');
const liEven = document.querySelectorAll('li.nth-child(even)');

for(let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = '#f4f';
}


console.log(items);














