let form = document.querySelector('form.row');
let ul = document.querySelector('.task_list');
let clearAll = document.querySelector('.clearAll');
var task_list = document.querySelector('.task_list');

let htmlTemplate = function(todo){
    let li = `
        <li>${todo}<span class="del">X</span> </li>
    `;
    ul.innerHTML += li;
}

ul.addEventListener('click', e => {
    if(e.target.classList.contains('del')){
        e.target.parentElement.remove();
    }   
})

form.addEventListener('submit', function(e){
    e.preventDefault();
    let todo = form.task.value.trim();
    if(todo.length){
        htmlTemplate(todo);
        form.reset();
    }   
})

function removeAll()
{
    document.querySelector('.task_list').innerHTML="";
}