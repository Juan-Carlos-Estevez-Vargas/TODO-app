import { readTasks } from "./readTasks.js";

/**
 * LLama a la función encargada de eliminar una tarea seleccionada
 * por el usuario y agrega estilos CSS especiales.
 *
 * @author Juan Carlos Estevez Vargas
 * @param {uuidv4} id identificador mediante el cual se pretende eliminar la tarea.
 * @returns ícono con la funcionalidad y estilos para eliminar una tarea.
 */
const deleteIcon = (id) => {
  const i = document.createElement("i");
  i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
  i.addEventListener("click", () => deleteTask(id));
  return i;
};

/**
 * Elimina tareas del display principal.
 *
 * @author Juan Carlos Estevez Vargas
 * @param {uuidv4} id identificador mediente el cual se liminará la tarea
 * seleccionada por el usuario.
 */
const deleteTask = (id) => {
  const li = document.querySelector("[data-list]");
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const index = tasks.findIndex((item) => item.id === id);

  tasks.splice(index, 1);
  li.innerHTML = "";
  localStorage.setItem("tasks", JSON.stringify(tasks));

  readTasks();
};

export default deleteIcon;
