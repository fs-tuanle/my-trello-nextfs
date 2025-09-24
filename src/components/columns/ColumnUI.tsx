import { Plus, SquarePen } from "lucide-react";
import TaskUI from "../tasks/TaskUI";

const tasks = [
  {
    title: "Thẻ 1",
    desc: "This is a placeholder for the Task UI.",
    date: "Tomorrow",
  },
  {
    title: "Thẻ 2",
    desc: "This is a placeholder for the Task UI.",
    date: "Today",
  },
  {
    title: "Thẻ 3",
    desc: "This is a placeholder for the Task UI.",
    date: "Yesterday",
  },
];

export default function ColumnUI() {
  return (
    <div className="w-1/4 bg-gray-100 p-4 rounded-lg mr-4">
      <header className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">Tên Cột</h2>
          <button className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-400 transition">
            <SquarePen size={14} />
            Sửa
          </button>
        </div>
        <p className="text-sm opacity-50 ml-2">Phụ đề cột</p>
      </header>
      <main>
        <div className="space-y-4">
          {tasks.map((task, index) => {
            return (
              <TaskUI
                key={index}
                title={task.title}
                description={task.desc}
                dueDate={task.date}
              />
            );
          })}
        </div>
      </main>
      <footer>
        <button className="mt-4 flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-400 transition">
          <Plus size={14} /> Thêm thẻ
        </button>
      </footer>
    </div>
  );
}
