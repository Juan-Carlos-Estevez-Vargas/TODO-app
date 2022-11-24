import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]");

const addTask = (evento) => {
  const list = document.querySelector("[data-list]");
  const task = createTask(evento);
  list.appendChild(task);
};

const createTask = (evento) => {
  evento.preventDefault();

  const input = document.querySelector("[data-form-input]");
  const value = input.value;

  const calendar = document.querySelector("[data-form-date]");
  const date = calendar.value;
  const dateFormat = moment(date).format("DD/MM/YYYY");

  const task = document.createElement("li");
  task.classList.add("card");
  input.value = "";

  const taskContent = document.createElement("div");

  const taskObject = {
    value,
    dateFormat,
  };

  sessionStorage.setItem("tasks", JSON.stringify(taskObject));

  const titleTask = document.createElement("span");

  const dateElement = document.createElement("span");
  dateElement.innerHTML = dateFormat;

  titleTask.classList.add("task");
  titleTask.innerText = value;

  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);

  task.appendChild(taskContent);
  task.appendChild(dateElement);
  task.appendChild(deleteIcon());

  return task;
};

btn.addEventListener("click", addTask);
