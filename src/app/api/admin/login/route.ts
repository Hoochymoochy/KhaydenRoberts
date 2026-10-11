import { NextResponse } from "next/server";
import { setAdminSession, verifyPassword } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const password = typeof body.password === "string" ? body.password : "";

    if (!verifyPassword(password)) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    await setAdminSession();
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error && error.message.includes("ADMIN_PASSWORD")
        ? "Server missing ADMIN_PASSWORD"
        : "Login failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
