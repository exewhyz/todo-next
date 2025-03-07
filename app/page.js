import TaskList from "@/components/TaskList";
import { getTodods } from "@/lib/todos";

export const revalidate = 0;
async function HomePage() {
  const { data } = await getTodods();
  return <TaskList todos={data} />;
}

export default HomePage;
