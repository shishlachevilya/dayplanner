export function getLocalTasks() {
  return JSON.parse(localStorage.getItem("todoList"));
}