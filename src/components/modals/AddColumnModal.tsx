"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function AddColumnModal({ board_id }: { board_id: number }) {
  const [colName, setColName] = useState<string>("");
  const [colDesc, setColDesc] = useState<string>("");

  const createColumn = async (
    name: string,
    desc: string,
    board_id: number,
    position: number
  ) => {
    await fetch("/api/columns", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        desc,
        board_id,
        position,
      }),
    });
  };

  const handleCreate = () => {
    if (!colName.trim()) return;
    createColumn(colName, colDesc, board_id, 4);
    setColName("");
    setColDesc("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-500 text-white rounded hover:bg-blue-600">
          <Plus size={14} />
          <span>Thêm cột</span>
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tạo cột</DialogTitle>
          <DialogDescription>
            Add a new board to organize your tasks.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 mt-4">
          <Input
            placeholder="Enter column title..."
            value={colName}
            onChange={(e) => setColName(e.target.value)}
          />
          <Input
            placeholder="Enter column subtitle..."
            value={colDesc}
            onChange={(e) => setColDesc(e.target.value)}
          />
          <Button onClick={handleCreate}>Create</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
