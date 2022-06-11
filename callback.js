
const todos=[
  {title:"Todo 1", description : "working react.."},
  {title:"Todo 2", description : "just watching some videos about JS.."},
  {title:"Todo 3", description : "dirty your hand.."},
  {title:"Todo 4", description : "develope some project with using react.."},
]
let todoListEl=document.getElementById("todoList")
function todoList(){
  setTimeout(()=>{
  let todoItems = ""
    todos.forEach(item=>{
      todoItems +=`
      <li>
      <b>${item.title}</b>
      <p>${item.description}</p>
      </li>`
    })

    todoListEl.innerHTML=todoItems


  },1000)

}

function newTodo(todo,callback){
  setTimeout(()=>{
    todos.push(todo)
   callback()
  },2000)
 
}


newTodo({title:"Todo 5", description : "sleep well.."},todoList)

