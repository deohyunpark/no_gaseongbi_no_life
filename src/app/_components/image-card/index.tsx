import React from 'react';

interface ImageCardProps {
  imageUrl: string; // 이미지 URL
  productName: string; // 상품명
  link: string; // 이동할 링크
}

export const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, productName, link }) => {
  return (
    <a href={link} className="block border rounded-lg overflow-hidden shadow-md" target="_blank" rel="noopener noreferrer">
      <img src={imageUrl} alt={productName} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{productName}</h3>
      </div>
    </a>
  );
};
