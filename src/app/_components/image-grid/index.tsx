import { getImages } from "@/server/get-images"; // 이미지를 가져오는 함수
import { ImageCard } from "../image-card"; // 이미지 카드 컴포넌트

interface Image {
  id: string;
  image_url: string; // 이미지 URL 필드
  product_name: string; // 상품명 필드
}

interface ImageGridProps {
  prompt?: string;
}

export async function ImageGrid({ prompt }: ImageGridProps) {
  let images: Image[] = []; // 타입 지정

  try {
    images = await getImages({
      take: 50,
      orderBy: prompt
        ? {
            _relevance: {
              fields: ["productName"],
              sort: "desc",
              search: prompt,
            },
          }
        : undefined,
      cacheStrategy: prompt
        ? {
            swr: 86_400, // 1 day
            ttl: 7_200, // 2 hours
          }
        : undefined,
    });
  } catch (error) {
    console.error("Failed to fetch images:", error);
    return <div>Error fetching images</div>; // 에러 처리 UI
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1200 ease-in-out">
      <h2 className="font-semibold text-md text-left w-full mb-3">
        {!!prompt ? "Related Products" : "Recent Products"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-items-stretch w-full">
        {images.length === 0 ? (
          <div>No images found.</div> // 이미지가 없을 때 메시지
        ) : (
          images.map((image) => (
            <ImageCard key={image.id} imageUrl={image.image_url} productName={image.product_name} />
          ))
        )}
      </div>
    </div>
  );
}
