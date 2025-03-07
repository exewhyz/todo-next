"use server";

const domain = "http://localhost:3000";

export async function getTodods() {
  const response = await fetch(`${domain}/api/todos`);
  const todos = await response.json();
  return todos;
}

export async function addTodo(name, description) {
  const response = await fetch(`${domain}/api/todos`, {
    method: "POST",
    body: JSON.stringify({ name, description }),
  });
  const todos = await response.json();
  return todos;
}

export async function deleteTodo(id) {
  const response = await fetch(`${domain}/api/todos`, {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });
  const todos = await response.json();
  return todos;
}

export async function updateTodo(id, completed) {
  const response = await fetch(`${domain}/api/todos`, {
    method: "PUT",
    body: JSON.stringify({ id, completed }),
  });
  const todos = await response.json();
  return todos;
}
