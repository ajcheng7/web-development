const todoList = [{
    name: 'make dinner', 
    dueDate: '2023-06-26'
}, {
    name: 'wash dishes',
    dueDate: '2023-06-28'
}];

renderTodoList(); 

function renderTodoList() {
    let todoListHTML = '';

    todoList.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;
        // generating the html by looping through array 
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="delete-todo-button" onclick="
                todoList.splice(${index},1);
                renderTodoList();
            ">Delete</button>
        `;
        todoListHTML += html;
    });

    // for (let i=0; i<todoList.length; i++) {
    //     const todoObject = todoList[i];
    //     const { name, dueDate } = todoObject;
    //     // generating the html by looping through array 
    //     const html = `
    //         <div>${name}</div>
    //         <div>${dueDate}</div>
    //         <button class="delete-todo-button" onclick="
    //             todoList.splice(${i},1);
    //             renderTodoList();
    //         ">Delete</button>
    //     `;
    //     todoListHTML += html;
    // }

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-todo-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                // index is a closure, deleted after loop but w/i func you can access it 
                todoList.splice(index,1);
                renderTodoList();
            });
        });
}

document.querySelector('.js-add-todo-button')
    .addEventListener('click', () => {
        addTodo();
    });

function addTodo() {
    const inputElement = document.querySelector(".js-name-input");
    const dueDateInput = document.querySelector(".js-due-date-input");

    const name = inputElement.value;
    const dueDate = dueDateInput.value;
    todoList.push({name, dueDate});
    
    // console.log(todoList);
    inputElement.value = '';

    renderTodoList();
}


