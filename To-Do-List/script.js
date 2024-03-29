const taskBox = document.getElementById("task-box");
const listContainer = document.getElementById("list-container");

function addTask(){
  if(taskBox.value === ''){
    alert("you must write something.");
  }
   else {
    let li = document.createElement("li");
    li.innerHTML = taskBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span")
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  taskBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function(e){
  if (e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();

  }
}, false);
function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
