import { Plus } from "lucide-react";
import ColumnUI from "../columns/ColumnUI";
import { IBoardRes } from "@/types/board";

export default function BoardUI({ name, desc }: IBoardRes) {
  return (
    <div className="mt-4 p-4 border border-dashed border-gray-300 rounded-lg bg-white drop-shadow-2xl">
      <header className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <button className="flex items-center gap-1 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            <Plus size={14} /> Thêm cột
          </button>
        </div>
        <p className="text-sm font-normal opacity-60 ml-2">{desc}</p>
      </header>
      <main className="flex overflow-x-auto space-x-4">
        <ColumnUI />
        <ColumnUI />
        <ColumnUI />
        <ColumnUI />
      </main>
    </div>
  );
}
