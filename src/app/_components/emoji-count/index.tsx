import { Suspense } from "react";

function CountDisplay() {
  return (
    <p className="text-gray-500 mb-12 text-base animate-in fade-in slide-in-from-bottom-4 duration-1200 ease-in-out">
      no 가성비 no life!
    </p>
  );
}

export function EmojiCount() {
  return (
    <Suspense fallback={<CountDisplay />}>
      <CountDisplay />
    </Suspense>
  );
}
