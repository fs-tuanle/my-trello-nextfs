import ColumnUI from "@/components/columns/ColumnUI";
import { parseItemId } from "@/lib/utils";
import { createSupabaseServerClient } from "@/lib/supabaseServer";
import AddColumnModal from "@/components/modals/AddColumnModal";

interface PageProps {
  params: Promise<{ boardId: string }>;
}

export default async function BoardPage(props: PageProps) {
  const supabase = await createSupabaseServerClient();

  const { boardId } = await props.params;

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
      <header className="mb-4 drop-shadow-2xl">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold mb-2">{board.name}</h3>
          <AddColumnModal board_id={id} />
        </div>
        <p className="text-sm font-normal opacity-60 ml-2">{board.desc}</p>
      </header>
      <main className="max-w-6xl mx-auto overflow-hidden">
        <div className="flex overflow-x-auto">
          {!columns || columns.length === 0 ? (
            <div>Bạn chưa có danh sách cột nào trong bảng.</div>
          ) : (
            columns.map((col) => (
              <ColumnUI key={col.id} className="mb-3 h-fit" {...col} />
            ))
          )}
        </div>
      </main>
    </div>
  );
}
