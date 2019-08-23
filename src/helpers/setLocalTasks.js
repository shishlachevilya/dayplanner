export function setLocalTasks(value) {
  localStorage.setItem("todoList", JSON.stringify(value));
}