"use client";

import { APP_STORE_URL, PROD_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Github, Plus, ChevronDown, Menu } from "lucide-react"; // Menu 아이콘 추가
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import "./globals.css";

export const dynamic = "force-dynamic";
export const runtime = "edge";

const BODY_PADDING = "px-4 sm:px-6";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>no gaseongbi no life : 노노가성비</title>
        <meta name="description" content="배송비딜, 100원딜, 본품체험 등 가성비 넘치는 체험딜을 공유하는 곳" />
        <meta property="og:title" content="no gaseongbi no life : 노노가성비" />
        <meta property="og:description" content="배송비딜, 100원딜, 본품체험 등 가성비 넘치는 체험딜을 공유하는 곳" />
        <meta property="og:url" content={PROD_URL} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="no gaseongbi no life : 노노가성비" />
        <meta name="twitter:description" content="배송비딜, 100원딜, 본품체험 등 가성비 넘치는 체험딜을 공유하는 곳" />
        <meta name="twitter:creator" content="@pondorasti" />
      </head>
      <body className={cn(inter.className, "antialiased bg-gray-100")}>
        <header className={cn("top-0 sticky z-20 w-full py-3 bg-gray-100 flex flex-row justify-between max-w-5xl mx-auto h-14 items-stretch")}>
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <Menu 
                size={32} 
                className="cursor-pointer text-gray-700 hover:text-gray-900 transition-colors" 
              />
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link href="/category1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">카테고리 1</Link>
                  <Link href="/category2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">카테고리 2</Link>
                  <Link href="/category3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">카테고리 3</Link>
                </div>
              </div>
            </div>
            <Link className="text-black text-lg font-medium" href="/">
              <span>노노가성비</span>
            </Link>
            <Link href="/new-deal" className="text-gray-700 hover:text-gray-900 transition-colors">
              <span>새로운 딜 등록하기</span>
            </Link>
          </div>
          <div className="flex flex-row gap-x-1.5 items-center">
            <Link href="https://github.com/pondorasti/emojis" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Github size={24} className="text-gray-700 hover:text-gray-900 transition-colors" />
            </Link>
          </div>
        </header>
        <main className={cn("min-h-screen flex items-stretch flex-col pb-28 max-w-5xl mx-auto", BODY_PADDING)}>
          {children}
        </main>
      </body>
    </html>
  );
}
