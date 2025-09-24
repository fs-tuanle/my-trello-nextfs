import { ClockAlert } from "lucide-react";

interface TaskUIProps {
  title: string;
  description: string;
  dueDate: string;
}

export default function TaskUI({ title, description, dueDate }: TaskUIProps) {
  return (
    <div className="p-4 border border-dashed border-gray-300 rounded-lg bg-white drop-shadow-lg">
      <h2 className="text-lg">{title}</h2>
      <p className="text-sm opacity-55 line-clamp-1">{description}</p>
      <div className="mt-2 flex items-center text-gray-500">
        <ClockAlert size={14} />
        <span className="ml-1 text-sm opacity-70">Due Date: {dueDate}</span>
      </div>
    </div>
  );
}
