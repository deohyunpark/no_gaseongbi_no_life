"use client";

import React, { useEffect, useState } from 'react';
import { getImages } from "@/server/get-images"; // 이미지를 가져오는 함수
import { ImageCard } from "../image-card"; // 이미지 카드 컴포넌트

interface Image {
  id: string;
  image_url: string; // 이미지 URL 필드
  product_name: string; // 상품명 필드
  link: string
}

interface ImageGridProps {
  prompt?: string;
}

export const ImageGrid: React.FC<ImageGridProps> = ({ prompt }) => {
  const [images, setImages] = useState<Image[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const fetchedImages = await getImages({
          take: 50,
          orderBy: prompt
            ? {
                _relevance: {
                  fields: ["product_name"], // 필드명 일치
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
        setImages(fetchedImages);
      } catch (error) {
        console.error("에러로그:", error);
        setError("에러발생~"); // 에러 메시지 상태 업데이트
      }
    };

    fetchImages();
  }, [prompt]);

  if (error) {
    return <div>{error}</div>; // 에러 처리 UI
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {images.map((image) => (
        <ImageCard key={image.id} imageUrl={image.image_url} productName={image.product_name} link={image.link} />
      ))}
    </div>
  );
};
