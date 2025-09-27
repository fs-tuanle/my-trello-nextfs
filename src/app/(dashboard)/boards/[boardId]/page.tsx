import ColumnUI from "@/components/columns/ColumnUI";
import { parseItemId } from "@/lib/utils";
import { createSupabaseBrowserClient } from "@/lib/supabaseClient";
import AddColumnModal from "@/components/modals/AddColumnModal";

interface BoardProps {
  params: {
    boardId: string;
  };
}

export default async function BoardPage({ params }: BoardProps) {
  const supabase = createSupabaseBrowserClient();

  const { boardId } = params;

  const id = parseItemId(boardId);

  const { data: board } = await supabase
    .from("boards")
    .select("*")
    .eq("id", id)
    .single();

  if (!board) return <div>No data</div>;

  const { data: columns } = await supabase
    .from("columns")
    .select("*")
    .eq("board_id", id);

  return (
    <div className="mt-4 p-4 border border-dashed border-gray-300 rounded-lg bg-white drop-shadow-2xl">
      <header className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold mb-2">{board.name}</h3>
          <AddColumnModal board_id={id} />
        </div>
        <p className="text-sm font-normal opacity-60 ml-2">{board.desc}</p>
      </header>
      <main className="flex overflow-x-auto space-x-4">
        {columns?.length === 0 ||
          (columns === null ? (
            <div>Bạn chưa có danh sách cột nào trong bảng.</div>
          ) : (
            columns.map((col) => {
              return <ColumnUI key={col.id} {...col} />;
            })
          ))}
      </main>
    </div>
  );
}
