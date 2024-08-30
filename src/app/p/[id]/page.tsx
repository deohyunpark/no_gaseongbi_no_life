import { EmojiCard } from "@/app/_components/emoji-card"
import { PageContent } from "@/app/_components/page-content"

export default function Emoji() {
  // 기본 데이터 사용
  const defaultPrompt = "Default Emoji Prompt"

  return (
    <PageContent prompt={defaultPrompt}>
      <EmojiCard id="default" alwaysShowDownloadBtn />
    </PageContent>
  )
}
