import React, { useState } from 'react';
import { useRouter } from 'next/router';

// 유틸리티 함수
const cn = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ');

// Input 컴포넌트
const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

// Button 컴포넌트
const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// Select 컴포넌트
const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, ...props }, ref) => {
    return (
      <select
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Select.displayName = "Select";

// Label 컴포넌트
const Label = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          className
        )}
        {...props}
      />
    );
  }
);
Label.displayName = "Label";

// Alert 컴포넌트
interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'destructive';
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'default', ...props }, ref) => {
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
      />
    );
  }
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn("font-medium text-lg", className)}
      {...props}
    />
  )
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("text-sm mt-1", className)}
      {...props}
    />
  )
);
AlertDescription.displayName = "AlertDescription";

// 간단한 Calendar 컴포넌트 (실제 달력 기능은 없음)
const Calendar = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => {
    return <Input type="date" ref={ref} {...props} />;
  }
);
Calendar.displayName = "Calendar";

// NewDealPage 컴포넌트
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
      // 여기에 실제 제출 로직을 구현하세요
      console.log('폼 데이터:', formData);
      
      // API 호출 시뮬레이션
      await new Promise(resolve => setTimeout(resolve, 1000));

      // 성공적인 제출 후 홈 페이지로 리다이렉트
      router.push('/');
    } catch (err) {
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
          <Select id="category" name="category" value={formData.category} onChange={handleChange} required>
            <option value="">카테고리 선택</option>
            <option value="electronics">전자기기</option>
            <option value="clothing">의류</option>
            <option value="food">식품</option>
          </Select>
        </div>

        <div className="mb-4">
          <Label htmlFor="link">링크</Label>
          <Input id="link" name="link" type="url" value={formData.link} onChange={handleChange} required />
        </div>

        <div className="mb-4">
          <Label htmlFor="image">이미지</Label>
          <Input id="image" name="image" type="file" accept="image/*" onChange={handleImageChange} required />
        </div>

        <div className="mb-4">
          <Label htmlFor="registrationDate">등록일</Label>
          <Calendar id="registrationDate" name="registrationDate" value={formData.registrationDate} onChange={handleChange} required />
        </div>

        <div className="mb-4">
          <Label htmlFor="expirationDate">마감일</Label>
          <Calendar id="expirationDate" name="expirationDate" value={formData.expirationDate} onChange={handleChange} required />
        </div>

        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertTitle>에러</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
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
