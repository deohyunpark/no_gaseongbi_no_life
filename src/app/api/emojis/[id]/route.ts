import { NextResponse } from "next/server"

export const runtime = "edge"
export const fetchCache = "force-no-store"
export const revalidate = 0

export async function GET(request: Request) {
  // 기본 응답 반환
  return NextResponse.json({ message: "Hello, World!" }, { status: 200 })
}
