import React from 'react';
import Image from 'next/image';
import { Clock, Truck } from 'lucide-react';

interface ImageCardProps {
  imageUrl: string;
  productName: string;
  link: string;
  price: number;
  shipping_charge: number;
  expiration_date: Date;
}

export const ImageCard: React.FC<ImageCardProps> = ({ 
  imageUrl, 
  productName, 
  link,
  price,
  shipping_charge,
  expiration_date
}) => {
  const formatDate = (date: Date) => {
    return date.toLocaleString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  return (
    <a 
      href={link} 
      className="flex bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-40"
      target="_blank" 
      rel="noopener noreferrer"
    >
      <div className="w-2/5 relative h-full">
        <Image 
          src={imageUrl} 
          alt={productName} 
          layout="fill"
          objectFit="cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300" />
      </div>
      <div className="w-3/5 p-2 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-sm text-gray-800 mb-1 line-clamp-2">{productName}</h3>
          <p className="text-lg font-bold text-blue-600 mb-1">
            {price.toLocaleString()} 원
          </p>
          <div className="flex items-center text-gray-600 mb-1">
            <Truck size={18} className="mr-2" />
            <span>{shipping_charge === 0 ? '무료배송' : `${shipping_charge.toLocaleString()}원`}</span>
          </div>
        </div>
        <div className="flex items-center text-gray-500 text-xs">
          <Clock size={16} className="mr-2" />
          <span>마감 {formatDate(expiration_date)}</span>
        </div>
      </div>
    </a>
  );
};

// import React from 'react';
// import { Clock, Truck } from 'lucide-react';

// interface ImageCardProps {
//   imageUrl: string;
//   productName: string;
//   // price: number;
//   // shippingFee: number;
//   // endDate: string;
//   link: string;
// }

// export const ImageCard: React.FC<ImageCardProps> = ({ 
//   imageUrl, 
//   productName, 
//   // price, 
//   // shippingFee, 
//   // endDate, 
//   link 
// }) => {
//   return (
// <a 
//   href={link} 
//   className="flex bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-40" // 카드 세로 크기 줄임
//   target="_blank" 
//   rel="noopener noreferrer"
// >
//   <div className="w-2/5 relative h-full"> {/* 이미지 비율을 높이기 위해 h-full 추가 */}
//     <img 
//       src={imageUrl} 
//       alt={productName} 
//       className="w-full h-full object-cover" // 이미지가 카드의 높이에 맞게 조정
//     />
//     <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300" />
//   </div>
//   <div className="w-3/5 p-2 flex flex-col justify-between"> {/* 패딩 줄임 */}
//     <div>
//       <h3 className="font-semibold text-sm text-gray-800 mb-1 line-clamp-2">{productName}</h3> {/* 글자 크기 줄임 */}
//       <p className="text-lg font-bold text-blue-600 mb-1"> {/* 글자 크기 줄임 */}
//         가격 원
//       </p>
//       <div className="flex items-center text-gray-600 mb-1"> {/* 마진 줄임 */}
//         <Truck size={18} className="mr-2" />
//         <span>무료배송</span>
//       </div>
//     </div>
//     <div className="flex items-center text-gray-500 text-xs"> {/* 글자 크기 줄임 */}
//       <Clock size={16} className="mr-2" />
//       <span>마감 </span>
//     </div>
//   </div>
// </a>


  
//   );
// };

