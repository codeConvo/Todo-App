const getInp = document.getElementById('todo-input');
const ul = document.getElementById('todo-list');


const toDo = function () {
  const inpVal = getInp.value;
  const createLi = document.createElement('li');
  const createTxt = document.createTextNode(inpVal);


  if (inpVal === '') {
    alert('Please enter a value')
  } else {
    /// Create Todo Text with Li
    ul.appendChild(createLi);
    createLi.appendChild(createTxt);
  }
  // Delete BTn

  const createDltBtn = document.createElement('button');
  const createDltTxt = document.createTextNode('Delete');

  createDltBtn.appendChild(createDltTxt);
  createLi.appendChild(createDltBtn);

  createDltBtn.setAttribute('onclick', 'dltTodo(this)');


  // Edit BTn

  const createEditBtn = document.createElement('button');
  const createEditTxt = document.createTextNode('Edit');

  createEditBtn.appendChild(createEditTxt);
  createLi.appendChild(createEditBtn);

  createEditBtn.setAttribute('onclick', 'editTodo(this)');


  emptyTodo();

}

const dltTodo = function (ele) {
  ele.parentNode.remove()
}

const editTodo = function (ele) {
  ele.parentNode.firstChild.nodeValue = prompt('Please Edit List')
}

const emptyTodo = function () {
  getInp.value = '';
}