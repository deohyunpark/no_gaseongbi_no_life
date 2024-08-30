import { APP_STORE_URL, PROD_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Github, Plus } from "lucide-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Providers } from "./_components/providers";
import "./globals.css";

export const dynamic = "force-dynamic";
export const runtime = "edge";

const BODY_PADDING = "px-4 sm:px-6";
const inter = Inter({ subsets: ["latin"] });

export function generateMetadata(): Metadata {
  const title = "no gaseongbi no life : 노노가성비";
  const description = "배송비딜, 100원딜, 본품체험 등 가성비 넘치는 체험딜을 공유하는 곳";
  return {
    metadataBase: new URL(PROD_URL),
    title,
    description,
    applicationName: "no gaseongbi no life",
    other: {
      "apple-itunes-app": "app-id=6468916301",
    },
    openGraph: {
      title,
      description,
      url: PROD_URL,
      siteName: "emojis.sh",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@pondorasti",
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased bg-gray-100")}>
        <header className={cn("top-0 sticky z-20 w-full py-3 bg-gray-100 flex flex-row flex-nowrap justify-between max-w-5xl mx-auto h-14 items-stretch")}>
          <div className="flex items-center space-x-4">
            <Link className="text-black text-lg font-medium flex items-center" href="/">
              <span>노노가성비</span>
            </Link>
            <Link href="/new-deal">
              <span>새로운 딜 등록하기</span>
            </Link>
          </div>
          <div className="flex flex-row flex-nowrap gap-x-1.5 items-center">
            <Link href="/app?referrer=website" target="_blank" rel="noopener noreferrer">
              <Image src="/_static/AppStoreBadge.svg" alt="App Store Badge" width={120} height={40} priority className="h-8" />
            </Link>
            <Link href="https://github.com/pondorasti/emojis" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Github size={20} />
            </Link>
          </div>
        </header>
        <main className={cn("min-h-screen flex items-stretch flex-col pb-28 max-w-5xl mx-auto", BODY_PADDING)}>
          {children}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/page1" className="flex flex-col items-center">
              <Image src="/thumbnail1.png" alt="Thumbnail 1" width={200} height={200} className="rounded-lg" />
              <span className="mt-2">썸네일 1 설명</span>
            </Link>
            <Link href="/page2" className="flex flex-col items-center">
              <Image src="/thumbnail2.png" alt="Thumbnail 2" width={200} height={200} className="rounded-lg" />
              <span className="mt-2">썸네일 2 설명</span>
            </Link>
            <Link href="/page3" className="flex flex-col items-center">
              <Image src="/thumbnail3.png" alt="Thumbnail 3" width={200} height={200} className="rounded-lg" />
              <span className="mt-2">썸네일 3 설명</span>
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
