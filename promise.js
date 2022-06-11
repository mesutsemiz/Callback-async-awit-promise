const todos = [
  { title: 'Todo 1', description: 'working react..' },
  { title: 'Todo 2', description: 'just watching some videos about JS..' },
  { title: 'Todo 3', description: 'dirty your hand..' },
  { title: 'Todo 4', description: 'develope some project with using react..' },
];
let todoListEl = document.getElementById('todoList');
function todoList() {
  setTimeout(() => {
    let todoItems = '';
    todos.forEach((item) => {
      todoItems += `
      <li>
      <b>${item.title}</b>
      <p>${item.description}</p>
      </li>`;
    });

    todoListEl.innerHTML = todoItems;
  }, 1000);
}

function newTodo(todo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      todos.push(todo);
      const e = false;

      if (!e) {
        resolve();
      } else {
        reject('hata var...');
      }
    }, 2000);
  });
}

newTodo({ title: 'Todo 5', description: 'sleep well..' })
  .then((res) => {
    todoList();
  })
  .catch((e) => {
    console.log(e);
  });

// todoList();

// promise all

const p1= Promise.resolve("P1")
const p2 = new Promise((resolve,reject)=>{

  setTimeout(resolve("ben 2. promisim"),2000,"deneme")

})
const p3 =14021658

const p4=fetch("https://jsonplaceholder.typicode.com/posts").then (res=>res.json())


Promise.all([p1,p2,p3,p4]).then(promises=>{
  console.log("promises",promises)
})