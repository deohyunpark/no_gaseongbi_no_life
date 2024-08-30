import { OpenGraphImage } from "@/app/_components/opengraph-image"
import { DEFAULT_OG_IMAGE } from "@/lib/constants"
import { EmojiContextProps } from "@/server/utils"

export { contentType, size } from "@/app/_components/favicon"

export default async function Image({ params }: EmojiContextProps) {
  // 기본 이미지 반환
  return OpenGraphImage({ url: DEFAULT_OG_IMAGE })
}
