const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = ()=>{
  fetch(apiUrl + "?_limit=5")
  .then((response)=> response.json())
  .then((todos)=> {
    todos.forEach((todo) => {
      addTodo(todo);      
    });
  });
}

const addTodo = (todo) =>{
  const div =  document.createElement('div');
  div.appendChild(document.createTextNode(todo.title));
  div.setAttribute("data-id",todo.id)

  if(todo.completed){
    div.classList.add('done');
  }

  document.getElementById('todo-list').appendChild(div)
}


const createTodo = (e) => {
 e.preventDefault(); 
   const newTodo = {
      title: e.target,
      completed : false
   }  
 console.log(newTodo);
   fetch(apiUrl,{
    method:"POST",
    body: JSON.stringify(newTodo),
    headers :{
      'Content-Type': "application/json"
    }
  })
  .then((respose)=> respose.json())
  .then((data)=> addTodo(data));
  
}


const init = () => {
  document.addEventListener('DOMContentLoaded',getTodos);
  document.getElementById("btn").addEventListener('click',createTodo);
}

init();