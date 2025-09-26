import { createSupabaseBrowserClient } from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

const supabase = createSupabaseBrowserClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const columnId = searchParams.get("columnId");

  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("column_id", columnId);

  if (error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 400,
      }
    );
  }

  return NextResponse.json({
    success: true,
    tasks: data,
  });
}
