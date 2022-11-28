/**
 * Valida y verifica que las tareas pertenezcan a una fecha unica
 *
 * @author Juan Carlos Estevez Vargas
 * @param {Object} tasks
 * @returns arreglo con las fechas únicas.
 */
export const uniqueDates = (tasks) => {
  const unique = [];

  tasks.forEach((task) => {
    if (!unique.includes(task.dateFormat)) unique.push(task.dateFormat);
  });

  return unique;
};

/**
 * Ordena fechas de manera ascendente.
 *
 * @author Juan Carlos Estevez Vargas.
 * @param {*} dates fechas a ordenar.
 * @returns Fechas ordenadas de manera ascendente.
 */
export const orderDates = (dates) => {
  return dates.sort((a, b) => {
    const firstDate = moment(a, "DD/MM/YYYY");
    const secondDate = moment(b, "DD/MM/YYYY");
    return firstDate - secondDate;
  });
};
