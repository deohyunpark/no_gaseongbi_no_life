import React, { Suspense } from "react"
import { ImageGrid } from "../image-grid"
import { EmojiCount } from "../emoji-count"
import { EmojiForm } from "../emoji-form"
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Tag, ShoppingBag, Sparkles } from "lucide-react"

interface PageContentProps extends React.PropsWithChildren {
  prompt?: string
}

export const PageContent = ({ children, prompt }: PageContentProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-white">
      <div className="py-[10vh] sm:py-[15vh] flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full"
        >
          <h1 className="font-bold text-5xl text-orange-600 mb-4 flex items-center justify-center">
            <Sparkles className="mr-2" />
            노노가성비
            <Sparkles className="ml-2" />
          </h1>
          <p className="text-center text-gray-600 mb-8 text-lg">가성비 넘치는 딜만 모아놨어요!</p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6 w-full"
          >
            <EmojiForm initialPrompt={prompt} />
            {children}
          </motion.div>
        </motion.div>
      </div>
      <Suspense fallback={
        <div className="text-center p-4 bg-orange-100 rounded-lg shadow-md mx-auto max-w-md mt-8">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-orange-300 h-12 w-12"></div>
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-orange-300 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-orange-300 rounded"></div>
                <div className="h-4 bg-orange-300 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      }>
        <ImageGrid prompt={prompt} />
      </Suspense>
    </div>
  )
}

// export const PageContent = ({ children, prompt }: PageContentProps) => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b">
//       <div className="py-[10vh] sm:py-[15vh] flex flex-col items-center justify-center px-4">
//         <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full animate-in fade-in slide-in-from-bottom-3 duration-1000 ease-in-out">
//           <h1 className="font-bold text-4xl text-orange-600 mb-3 flex items-center justify-center">
//             노노가성비
//           </h1>
//           <p className="text-center text-gray-600 mb-6">가성비 넘치는 딜만 모아놨어요!</p>
//           <div className="space-y-4 w-full animate-in fade-in slide-in-from-bottom-4 duration-1200 ease-in-out">
//             <EmojiForm initialPrompt={prompt} />
//             {children}
//           </div>
//         </div>
//       </div>
//       <Suspense fallback={<div className="text-center">이미지 로딩 중...</div>}>
//         <ImageGrid prompt={prompt} />
//       </Suspense>
//     </div>
//   )
// }



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
