import { Response } from "@/server/utils"

export async function POST(req: Request) {
  try {
    // 요청 처리 로직 제거
    return Response.success()
  } catch (error) {
    console.error(error)
    return Response.internalServerError()
  }
}
