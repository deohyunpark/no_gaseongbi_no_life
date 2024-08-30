import { Prisma } from "@prisma/client"
import "server-only"
import { prisma } from "./db"
import { VALID_EMOJI_FILTER } from "./utils"
import { PrismaCacheStrategy } from "@prisma/extension-accelerate"

export const getEmojis = async (opts: {
  take?: number
  skip?: number
  orderBy?: any
  cacheStrategy?: PrismaCacheStrategy["cacheStrategy"]
}) => {
  return []
}

