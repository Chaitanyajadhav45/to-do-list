let todoList = [];

const listFromLocalStorage = localStorage.getItem("todoList");
if(listFromLocalStorage)
{
    todoList = JSON.parse(listFromLocalStorage);
    renderToDoList();
}



function renderToDoList(){
    const listContainer = document.getElementById('list-container');
    listContainer.innerHTML = "";

    for(const todoItem of todoList)
    {
        listContainer.innerHTML += `<div class="todoItem">
            <input type="checkbox">
            ${todoItem}</div>` ;
    }
}