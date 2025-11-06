"use client";

import { Plus, SquarePen } from "lucide-react";
import TaskUI from "../tasks/TaskUI";
import { useEffect, useState } from "react";
import { ITasksRes } from "@/types/task";
import { cx } from "class-variance-authority";

interface IColumnUI {
  id: number;
  name: string;
  desc: string;
  position: number;
  className: string;
}

export default function ColumnUI({ id, name, desc, className }: IColumnUI) {
  const [tasks, setTasks] = useState<ITasksRes[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch(`/api/tasks?columnId=${id}`);
      const data = await res.json();
      if (data) {
        setTasks(data.tasks);
      }
    };

    fetchTasks();
  }, [id]);

  return (
    <div className={cx("min-w-1/4 bg-blue-400 p-4 rounded-lg mr-4", className)}>
      <header className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">{name}</h2>
          <button className="flex items-center gap-1 px-2 py-1 rounded transition">
            <SquarePen size={14} />
            Sửa
          </button>
        </div>
        <p className="text-sm opacity-50 ml-2">{desc}</p>
      </header>
      <main>
        <div className="space-y-4">
          {tasks.length === 0 ? (
            <div>Bạn chưa thêm công việc vào cột</div>
          ) : (
            tasks.map((task, index) => {
              return (
                <TaskUI
                  key={index}
                  title={task.name}
                  description={task.desc}
                  dueDate={task.due_date}
                />
              );
            })
          )}
        </div>
      </main>
      <footer>
        <button className="mt-4 flex items-center gap-1 px-2 py-1 rounded w-full hover:bg-blue-700 hover:text-white font-semibold transition cursor-pointer">
          <Plus size={14} /> Thêm thẻ
        </button>
      </footer>
    </div>
  );
}
