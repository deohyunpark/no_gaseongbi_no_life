import React, { Suspense } from "react"
import { ImageGrid } from "../image-grid"
import { EmojiForm } from "../emoji-form"
import { Search, Loader } from "lucide-react"

interface PageContentProps extends React.PropsWithChildren {
  prompt?: string
}

export const PageContent: React.FC<PageContentProps> = ({ children, prompt }) => {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-semibold text-4xl sm:text-5xl text-gray-900 mb-6 text-center">
            노노가성비
          </h1>
          <p className="text-center text-gray-500 mb-12 text-lg">
            가성비 넘치는 특별한 딜만 엄선했어요
          </p>
          <div className="mb-12">
            <EmojiForm initialPrompt={prompt} />
          </div>
          <div className="space-y-8 w-full">
            {children}
          </div>
        </div>
        <Suspense fallback={<LoadingFallback />}>
          <div className="mt-16">
            <ImageGrid prompt={prompt} />
          </div>
        </Suspense>
      </div>
    </div>
  )
}

const LoadingFallback: React.FC = () => (
  <div className="flex justify-center items-center h-32">
    <Loader className="animate-spin text-gray-400" size={24} />
  </div>
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
