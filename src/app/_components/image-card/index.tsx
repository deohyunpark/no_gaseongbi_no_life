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
  className="flex bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-48" // 세로 사이즈 줄임
  target="_blank" 
  rel="noopener noreferrer"
>
  <div className="w-2/5 relative">
    <img 
      src={imageUrl} 
      alt={productName} 
      className="w-full h-full object-cover" // 정방형으로 늘리기 위해 width와 height를 동일하게 설정
    />
    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300" />
  </div>
  <div className="w-3/5 p-4 flex flex-col justify-between"> {/* 패딩을 줄여서 세로 크기 감소 */}
    <div>
      <h3 className="font-semibold text-md text-gray-800 mb-1 line-clamp-2">{productName}</h3> {/* 글자 크기 줄임 */}
      <p className="text-xl font-bold text-blue-600 mb-1"> {/* 글자 크기 줄임 */}
        가격 원
      </p>
      <div className="flex items-center text-gray-600 mb-1"> {/* 마진 줄임 */}
        <Truck size={18} className="mr-2" />
        <span>무료배송</span>
      </div>
    </div>
    <div className="flex items-center text-gray-500 text-xs"> {/* 글자 크기 줄임 */}
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
