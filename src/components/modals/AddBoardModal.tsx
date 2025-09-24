"use client";

import { useState } from "react";
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

export default function AddBoardModal() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  const createBoard = async (name: string, desc: string, owner_id: string) => {
    const res = await fetch("/api/boards", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        desc: desc,
        owner_id: owner_id,
      }),
    });
    const data = await res.json();
    console.log("Created:", data.board);
  };

  const handleCreate = () => {
    if (!title.trim() || !subtitle.trim()) return;

    createBoard(title, subtitle, "58fd9a41-28f5-41aa-92c4-300f0e5668e9");

    setTitle("");
    setSubtitle("");
  };

  return (
    <Dialog>
      {/* Nút mở modal */}
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700">+ Thêm bảng</Button>
      </DialogTrigger>

      {/* Nội dung modal */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tạo bảng</DialogTitle>
          <DialogDescription>
            Add a new board to organize your tasks.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4 mt-4">
          <Input
            placeholder="Enter board title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            placeholder="Enter board subtitle..."
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />
          <Button onClick={handleCreate}>Create</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
