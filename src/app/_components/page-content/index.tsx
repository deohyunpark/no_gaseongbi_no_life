import React, { Suspense } from "react"
import { ImageGrid } from "../image-grid"
import { EmojiCount } from "../emoji-count"
import { EmojiForm } from "../emoji-form"
import { Tag, ShoppingBag, Sparkles } from "lucide-react"

interface PageContentProps extends React.PropsWithChildren {
  prompt?: string
}

export const PageContent = ({ children, prompt }: PageContentProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-orange-100">
      <div className="py-[10vh] sm:py-[15vh] flex flex-col items-center justify-center px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full animate-in fade-in slide-in-from-bottom-3 duration-1000 ease-in-out">
          <h1 className="font-bold text-4xl text-orange-600 mb-3 flex items-center justify-center">
            <ShoppingBag className="mr-2" />
            노노가성비
            <Sparkles className="ml-2" />
          </h1>
          <p className="text-center text-gray-600 mb-6">가성비 넘치는 제품만 모아놨어요!</p>
          <EmojiCount />
          <div className="space-y-4 w-full animate-in fade-in slide-in-from-bottom-4 duration-1200 ease-in-out">
            <EmojiForm initialPrompt={prompt} />
            {children}
          </div>
        </div>
      </div>
      <Suspense fallback={<div className="text-center">이미지 로딩 중...</div>}>
        <ImageGrid prompt={prompt} />
      </Suspense>
    </div>
  )
}



// import { Suspense } from "react"
// import { ImageGrid } from "../image-grid"
// import { EmojiCount } from "../emoji-count"
// import { EmojiForm } from "../emoji-form"

// interface PageContentProps extends React.PropsWithChildren {
//   prompt?: string
// }

// export const PageContent = ({ children, prompt }: PageContentProps) => {
//   return (
//     <>
//       <div className="py-[15vh] sm:py-[20vh] flex flex-col items-center justify-center">
//         <h1 className="font-medium text-4xl text-black mb-3 animate-in fade-in slide-in-from-bottom-3 duration-1000 ease-in-out">
//           노노가성비
//         </h1>
//         <EmojiCount />

//         <div className="max-w-md space-y-4 w-full animate-in fade-in slide-in-from-bottom-4 duration-1200 ease-in-out">
//           <EmojiForm initialPrompt={prompt} />
//           {children}
//         </div>
//       </div>

//       <Suspense>
//         <ImageGrid prompt={prompt} />
//       </Suspense>
//     </>
//   )
// }
