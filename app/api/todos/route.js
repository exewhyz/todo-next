const todos = [
  {
    id: 1,
    name: "Todo 1",
    description: "Description 1",
    completed: false,
  },
  {
    id: 2,
    name: "Todo 2",
    description: "Description 2",
    completed: false,
  },
  {
    id: 3,
    name: "Todo 3",
    description: "Description 3",
    completed: false,
  },
];

export function GET() {
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
  const newTodo = {
    id: Date.now(),
    name,
    description,
    completed: false,
  };
  todos.push(newTodo);

  return Response.json(
    {
      data: todos,
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
