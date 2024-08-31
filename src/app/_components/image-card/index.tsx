import React from 'react';

interface ImageCardProps {
  imageUrl: string; // 이미지 URL
  productName: string; // 상품명
}

export const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, productName }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <img src={imageUrl} alt={productName} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{productName}</h3>
      </div>
    </div>
  );
};
