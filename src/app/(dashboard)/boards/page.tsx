"use client";

import { useEffect, useState } from "react";
import { IBoardRes } from "@/types/board";
import BoardCard from "@/components/boards/BoardCard";
import { Plus } from "lucide-react";
import AddBoardModal from "@/components/modals/AddBoardModal";

export default function DashboardPage() {
  const [boards, setBoards] = useState<IBoardRes[]>([]);

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const res = await fetch("api/boards");
        const data = await res.json();
        if (data.success) {
          // console.log(data.boards);
          setBoards(data.boards);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchBoards();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Welcome to your Dashboard 🚀</h2>
        <AddBoardModal />
      </div>
      <p className="mt-2 text-gray-600">
        Đây là nơi bạn có thể quản lý project giống Trello.
      </p>
      {boards.length === 0 ? (
        <p className="mt-4 text-gray-500">
          Chưa có bảng nào. Hãy tạo bảng mới!
        </p>
      ) : (
        <div className="mt-4 space-y-6">
          <div className="grid md:grid-cols-3 grid-cols-3 lg:grid-cols-4 gap-4">
            {boards.map((board) => {
              return <BoardCard key={board.id} {...board} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
