"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/app/supabaseClient';

const cn = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ');

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

const Label = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          "text-sm font-medium leading-none",
          className
        )}
        {...props}
      />
    );
  }
);
Label.displayName = "Label";

const Alert = React.forwardRef<HTMLDivElement, { variant?: 'default' | 'destructive'; className?: string; children?: React.ReactNode; }>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          "relative w-full rounded-lg border p-4",
          variant === 'destructive' ? "bg-red-100 border-red-400 text-red-700" : "bg-blue-100 border-blue-400 text-blue-700",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Alert.displayName = "Alert";



const NewDealPage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    productName: '',
    category: '',
    link: '',
    image: null as File | null,
    registrationDate: '',
    expirationDate: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, image: e.target.files![0] }));
    }
  };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  setError(null);

  try {
    // 이미지 업로드
    let imageUrl = '';
    if (formData.image) {
      const { data, error: uploadError } = await supabase.storage
        .from('images') // 스토리지 버킷 이름
        .upload(`public/${formData.image.name}`, formData.image);

      if (uploadError) throw uploadError;

      imageUrl = data?.path || ''; // 업로드 후 URL 가져오기
    }

    // 데이터베이스에 상품 정보 저장
    const { error: dbError } = await supabase
      .from('deals') // 테이블 이름
      .insert([
        {
          product_name: formData.productName,
          category: formData.category,
          link: formData.link,
          image_url: imageUrl,
          registration_date: formData.registrationDate,
          expiration_date: formData.expirationDate,
        },
      ]);

    if (dbError) throw dbError;

    router.push('/');
  } catch (err) {
    console.error(err);
    setError('딜 제출에 실패했습니다. 다시 시도해 주세요.');
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">새로운 딜 등록</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="productName">상품명</Label>
          <Input id="productName" name="productName" value={formData.productName} onChange={handleChange} required />
        </div>

        <div className="mb-4">
          <Label htmlFor="category">카테고리</Label>
          <select id="category" name="category" value={formData.category} onChange={handleChange} required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
            <option value="">카테고리 선택</option>
            <option value="electronics">전자기기</option>
            <option value="clothing">의류</option>
            <option value="food">식품</option>
          </select>
        </div>

        <div className="mb-4">
          <Label htmlFor="link">링크</Label>
          <Input id="link" name="link" type="url" value={formData.link} onChange={handleChange} required />
        </div>

        <div className="mb-4">
          <Label htmlFor="image">이미지</Label>
          <Input id="image" name="image" type="file" accept="image/*" onChange={handleImageChange} required />
          {formData.image && (
            <img src={URL.createObjectURL(formData.image)} alt="썸네일" className="mt-2 h-20 w-20 object-cover rounded-md" />
          )}
        </div>

        <div className="mb-4">
          <Label htmlFor="registrationDate">등록일</Label>
          <Input id="registrationDate" name="registrationDate" type="date" value={formData.registrationDate} onChange={handleChange} required />
        </div>

        <div className="mb-4">
          <Label htmlFor="expirationDate">마감일</Label>
          <Input id="expirationDate" name="expirationDate" type="date" value={formData.expirationDate} onChange={handleChange} required />
        </div>

        {error && (
          <Alert variant="destructive" className="mb-4">
            <h5 className="font-medium text-lg">에러</h5>
            <div className="text-sm mt-1">{error}</div>
          </Alert>
        )}

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? '제출 중...' : '딜 등록하기'}
        </Button>
      </form>
    </div>
  );
};

export default NewDealPage; 
