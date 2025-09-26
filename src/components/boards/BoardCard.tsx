import { getItemUrl } from "@/lib/utils";
import { IBoardRes } from "@/types/board";
import Image from "next/image";
import Link from "next/link";

export default function BoardCard({ id, name, desc }: IBoardRes) {
  return (
    <Link href={`/boards/${getItemUrl({ id, name })}`} className="w-full">
      <div className="border border-dashed border-gray-300 rounded-lg bg-white hover:shadow-lg hover:opacity-55 transition cursor-pointer">
        <div className="h-28">
          <Image
            src="/images/bg.jfif"
            alt="Board Background"
            width={500}
            height={100}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>
        <div className="bg-black/5 px-2 py-1">
          <h2 className="font-semibold">{name}</h2>
          <div className="text-sm opacity-50 line-clamp-1 text-yellow-700">
            {desc ? (
              desc
            ) : (
              <span className="text-red-500 font-semibold">
                Không có phụ đề bảng
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
