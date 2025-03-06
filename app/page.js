import TaskList from "@/components/TaskList";
import { getTodods } from "@/lib/todos";

async function HomePage() {
  const { data } = await getTodods();
  return <TaskList todos={data} />;
}

export default HomePage;
