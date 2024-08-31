import React from 'react';

interface ImageCardProps {
  imageUrl: string;
  productName: string;
  link: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, productName, link }) => {
  return (
    <a 
      href={link} 
      className="block rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl group"
      target="_blank" 
      rel="noopener noreferrer"
    >
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={productName} 
          className="w-full h-56 object-cover transition-all duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
      </div>
      <div className="p-4 bg-white">
        <h3 className="font-medium text-lg text-gray-800 truncate">{productName}</h3>
      </div>
    </a>
  );
};

// import React from 'react';

// interface ImageCardProps {
//   imageUrl: string; // 이미지 URL
//   productName: string; // 상품명
//   link: string; // 이동할 링크
// }

// export const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, productName, link }) => {
//   return (
//     <a href={link} className="block border rounded-lg overflow-hidden shadow-md" target="_blank" rel="noopener noreferrer">
//       <img src={imageUrl} alt={productName} className="w-full h-48 object-cover" />
//       <div className="p-4">
//         <h3 className="font-semibold text-lg">{productName}</h3>
//       </div>
//     </a>
//   );
// };
