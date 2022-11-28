import { createTask } from "./addTask.js";
import { uniqueDates, orderDates } from "../services/date.js";
import dateElement from "./dateElement.js";

/**
 * Lee los elementos del LocalStorage, ordena dichos elementos por fecha
 * y los agrega al panel principal.
 */
export const readTasks = () => {
  const list = document.querySelector("[data-list]");
  const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  const dates = uniqueDates(taskList);

  orderDates(dates);

  dates.forEach((date) => {
    const dateMoment = moment(date, "DD/MM/YYYY");
    list.appendChild(dateElement(date));
    taskList.forEach((task) => {
      const taskDate = moment(task.dateFormat, "DD/MM/YYYY");
      const diff = dateMoment.diff(taskDate);

      if (diff === 0) {
        list.appendChild(createTask(task));
      }
    });
  });
};
