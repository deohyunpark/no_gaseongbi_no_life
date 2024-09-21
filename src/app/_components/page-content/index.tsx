import React, { Suspense } from "react"
import { ImageGrid } from "../image-grid"
import { EmojiForm } from "../emoji-form"
import { Sparkles, Loader } from "lucide-react"
import { motion, AnimatePresence } from 'framer-motion'

interface PageContentProps extends React.PropsWithChildren {
  prompt?: string
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 }
}

export const PageContent: React.FC<PageContentProps> = ({ children, prompt }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <AnimatePresence>
        <motion.div 
          className="container mx-auto py-16 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-white rounded-3xl shadow-2xl p-8 max-w-3xl mx-auto"
            variants={fadeInUp}
            {...fadeInUp}
          >
            <motion.h1 
              className="font-bold text-5xl sm:text-6xl text-orange-600 mb-6 text-center flex items-center justify-center"
              variants={fadeInUp}
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="mr-3 text-orange-400" />
              노노가성비
              <Sparkles className="ml-3 text-orange-400" />
            </motion.h1>
            <motion.p 
              className="text-center text-gray-600 mb-10 text-lg sm:text-xl"
              variants={fadeInUp}
              {...fadeInUp}
              transition={{ delay: 0.3 }}
            >
              가성비 넘치는 특별한 딜만 엄선했어요!
            </motion.p>
            <motion.div
              className="space-y-8 w-full"
              variants={fadeInUp}
              {...fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <EmojiForm initialPrompt={prompt} />
              {children}
            </motion.div>
          </motion.div>

          <Suspense fallback={<LoadingFallback />}>
            <motion.div
              variants={fadeInUp}
              {...fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <ImageGrid prompt={prompt} />
            </motion.div>
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

const LoadingFallback: React.FC = () => (
  <motion.div 
    className="text-center p-6 bg-orange-100 rounded-2xl shadow-lg mx-auto max-w-md mt-10"
    variants={fadeInUp}
    {...fadeInUp}
  >
    <div className="flex items-center justify-center space-x-4">
      <Loader className="animate-spin text-orange-500" size={32} />
      <p className="text-lg font-medium text-orange-700">멋진 상품들을 불러오는 중...</p>
    </div>
  </motion.div>
)

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
