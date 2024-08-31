import React from 'react';
import { Clock, Truck } from 'lucide-react';

interface ImageCardProps {
  imageUrl: string;
  productName: string;
  // price: number;
  // shippingFee: number;
  // endDate: string;
  link: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({ 
  imageUrl, 
  productName, 
  // price, 
  // shippingFee, 
  // endDate, 
  link 
}) => {
  return (
    <a 
      href={link} 
      className="flex bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-64"
      target="_blank" 
      rel="noopener noreferrer"
    >
      <div className="w-2/5 relative">
        <img 
          src={imageUrl} 
          alt={productName} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300" />
      </div>
      <div className="w-3/5 p-6 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2">{productName}</h3>
          <p className="text-2xl font-bold text-blue-600 mb-2">
            가격 원
          </p>
          <div className="flex items-center text-gray-600 mb-2">
            <Truck size={18} className="mr-2" />
            <span>무료배송</span>
{/*             <span>{shippingFee === 0 ? "무료배송" : `${shippingFee.toLocaleString()}원`}</span> */}
          </div>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <Clock size={16} className="mr-2" />
          <span>마감 </span>
        </div>
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
