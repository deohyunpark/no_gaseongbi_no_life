import { OpenGraphImage } from "@/app/_components/opengraph-image"
import { DEFAULT_OG_IMAGE } from "@/lib/constants"
import { getEmoji } from "@/server/get-emoji"
import { EmojiContextProps } from "@/server/utils"

export { contentType, size } from "@/app/_components/favicon"

export default async function Image({ params }: EmojiContextProps) {
  try {
    const data = await getEmoji(params.id)
    if (!data) return OpenGraphImage({ url: DEFAULT_OG_IMAGE })

    const image = data.noBackgroundUrl || data.originalUrl || DEFAULT_OG_IMAGE
    return OpenGraphImage({ url: image })
  } catch (error) {
    console.error("Error fetching emoji data:", error)
    return OpenGraphImage({ url: DEFAULT_OG_IMAGE })
  }
}
