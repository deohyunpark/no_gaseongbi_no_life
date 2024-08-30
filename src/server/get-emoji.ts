import "server-only";
import { prisma } from "./db"; // 경로가 맞는지 확인

export const getEmoji = async (id: string) => {
  try {
    const emoji = await prisma.emoji.findUnique({
      where: { id },
    });
    if (!emoji) {
      throw new Error('Emoji not found');
    }
    return emoji;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch emoji');
  }
};
