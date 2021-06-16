//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filter = document.querySelector('.filter-todo');
const title = document.querySelector('.title');

//event listeners
title.addEventListener('click', () => title.innerHTML = '');
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
// filter.addEventListener('click', filterTodo);

function addTodo(event) {
  //prevent default behavior
  event.preventDefault();

  //todo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  //todo li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  if(todoInput.value === '') {
    return null;
  }

  //check mark button
  const doneButton = document.createElement('button');
  doneButton.innerHTML = '<span class="material-icons">done</span>'
  doneButton.classList.add('done-btn');
  todoDiv.appendChild(doneButton);

  //delte button
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<span class="material-icons">clear</span>'
  deleteButton.classList.add('delete-btn');
  todoDiv.appendChild(deleteButton);

  //append to the list
  todoList.appendChild(todoDiv);

  //clear the input value
  todoInput.value = '';
}

function deleteCheck(event) {
  const item = event.target;

  //delete item
  if(item.parentElement.classList[0] === 'delete-btn') {
    item.parentElement.parentElement.remove();
  }

  if(item.parentElement.classList[0] === 'done-btn') {
    item.parentElement.parentElement.classList.toggle('done');
  }
}

function filterTodo(event) {

}