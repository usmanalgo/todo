var input = document.querySelector("input");
var list = document.querySelector("ol");
var error = document.getElementById("error-text");
var addBtn = document.getElementById("add-btn")
var editBtn = document.getElementById("edit-btn");
var arrIndex = null;

var arry = [];

function addtodo() {
  if (input.value === "") {
    error.textContent = "Please Enter Value!";
  } else {
    error.textContent = "";
    arry.push(input.value);
    renderList();
    input.value = "";
  }
}

function renderList() {
  list.innerHTML = "";
  for (var i = 0; i < arry.length; i++) {
    list.innerHTML += `
                    <li>
                        ${arry[i]}
                        <button  onclick="deleteItem(${i})">Delete</button>
                        <button  onclick="editItem(${i})">Edit</button>
                    </li>
                `;
  }
}

function deleteItem(index) {
  arry.splice(index, 1);
  renderList();
}

function editItem(index) {
  console.log("arry[index]", arry[index])
  input.value = arry[index]
  addBtn.style.display = 'none'
  editBtn.style.display = 'block'
  arrIndex = index
}

function updateItem() {
  if (input.value === "") {
    error.textContent = "Please Enter Value!";
  } else {
    arry[arrIndex] = input.value
    addBtn.style.display = 'block'
    editBtn.style.display = 'none'
    renderList();
    input.value = "";
  }
}

// var value = input.value;
