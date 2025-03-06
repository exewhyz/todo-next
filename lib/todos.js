"use server"

const domain = 'http://localhost:3000';

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

export async function deleteTodo() {}

export async function updateTodo() {}
