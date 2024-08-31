"use client";

import { APP_STORE_URL, PROD_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Github, Plus, ChevronDown } from "lucide-react";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Providers } from "./_components/providers";
import "./globals.css";
import { useState } from "react";

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
        <header className={cn("top-0 sticky z-20 w-full py-3 bg-gray-100 flex flex-row flex-nowrap justify-between max-w-5xl mx-auto h-14 items-stretch")}>
          <div className="flex items-center space-x-4">
            <Link className="text-black text-lg font-medium flex items-center" href="/">
              <span>노노가성비</span>
              <ChevronDown 
                size={16} 
                className="ml-1 cursor-pointer" 
                onClick={() => setIsOpen(!isOpen)} 
              />
            </Link>
            {isOpen && (
              <div className="absolute bg-white shadow-lg rounded mt-2 z-10">
                <ul className="flex flex-col">
                  <li className="p-2 hover:bg-gray-200"><Link href="/category1">카테고리 1</Link></li>
                  <li className="p-2 hover:bg-gray-200"><Link href="/category2">카테고리 2</Link></li>
                  <li className="p-2 hover:bg-gray-200"><Link href="/category3">카테고리 3</Link></li>
                </ul>
              </div>
            )}
            <Link href="/new-deal">
              <span>새로운 딜 등록하기</span>
            </Link>
          </div>
          <div className="flex flex-row flex-nowrap gap-x-1.5 items-center">
            <Link href="https://github.com/pondorasti/emojis" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Github size={20} />
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
