const app = document.getElementById("app");
const todosContainer = document.getElementById("todos");
const allBtn = document.getElementById("all");
const completedBtn = document.getElementById("completed");
const uncompletedBtn = document.getElementById("uncompleted");

const todos = [
  {
    title: "Todo 1",
    completed: true
  },
  {
    title: "Todo 2",
    completed: false
  },
  {
    title: "Todo 3",
    completed: false
  },
  {
    title: "Todo 4",
    completed: true
  }
];



// Display completed todos
completedBtn.addEventListener("click", () => {
  todosContainer.innerHTML = "";
  todos
    .filter(todo => todo.completed)
    .forEach(todo => {
      const li = document.createElement("li");
      li.innerHTML = todo.title;
      todosContainer.appendChild(li);
    });
});

// Display uncompleted todos
uncompletedBtn.addEventListener("click", () => {
  todosContainer.innerHTML = "";
  todos
    .filter(todo => !todo.completed)
    .forEach(todo => {
      const li = document.createElement("li");
      li.innerHTML = todo.title;
      todosContainer.appendChild(li);
    });
});
