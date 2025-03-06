import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const todos = await prisma.todo.findMany();
  return Response.json(
    {
      data: todos,
      message: "Successfully fetched todos",
    },
    { status: 200 }
  );
}

export async function POST(request) {
  const { name, description } = await request.json();
  if (!name || !description) {
    return Response.json(
      { message: "Name and description are required" },
      { status: 400 }
    );
  }
  await prisma.todo.create({
    data: {
      name,
      description,
      completed: false,
    },
  });

  const newTodos = await prisma.todo.findMany();

  return Response.json(
    {
      data: newTodos,
      message: "Successfully added new todo",
    },
    { status: 201 }
  );
}

export function PUT() {
  
  return Response.json({ message: "PUT todos" });
}

export function DELETE() {
  return Response.json({ message: "DELETE todos" });
}
