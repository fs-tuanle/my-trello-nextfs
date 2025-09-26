import { createSupabaseBrowserClient } from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

const supabase = createSupabaseBrowserClient();

export async function GET() {
  const { data, error } = await supabase.from("columns").select("*");

  if (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }

  return NextResponse.json({ success: true, boards: data });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, desc, board_id, position } = body;

    if (!name.trim()) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("columns")
      .insert([{ name, desc, board_id, position }])
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, column: data[0] });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, error: (err as Error).message },
      { status: 500 }
    );
  }
}
