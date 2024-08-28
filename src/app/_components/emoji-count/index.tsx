import { getEmojisCount } from "@/server/get-emojis-count";
import { Suspense } from "react";

interface CountDisplayProps {
  count?: number;
}

function CountDisplay({ count }: CountDisplayProps) {
  return (
    <p className="text-gray-500 mb-12 text-base animate-in fade-in slide-in-from-bottom-4 duration-1200 ease-in-out">
      {count || "–––"} emojis generated and counting!
    </p>
  );
}

async function AsyncEmojiCount() {
  try {
    const count = await getEmojisCount();
    return <CountDisplay count={count} />;
  } catch (error) {
    console.error("Failed to fetch emoji count:", error);
    return <CountDisplay />; // 에러 발생 시 기본 메시지 표시
  }
}

export function EmojiCount() {
  return (
    <Suspense fallback={<CountDisplay />}>
      <AsyncEmojiCount />
    </Suspense>
  );
}
