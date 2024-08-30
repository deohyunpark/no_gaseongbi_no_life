import { CornerDownLeft } from "lucide-react";
import React from "react";
import { useFormContext, useFormState } from "react-hook-form"; // useFormContext 추가
import { Loader } from "../loader";

export const SubmitButton = React.forwardRef<React.ElementRef<"button">>((_, ref) => {
  const { control } = useFormContext(); // FormContext에서 control 가져오기
  const { isSubmitting } = useFormState({ control }); // control을 useFormState에 전달

  return (
    <button
      ref={ref}
      type="submit"
      disabled={isSubmitting}
      aria-disabled={isSubmitting}
      className="text-white rounded-lg hover:bg-white/25 focus:bg-white/25 w-8 h-8 aspect-square flex items-center justify-center ring-0 outline-0"
    >
      {isSubmitting ? <Loader /> : <CornerDownLeft size={16} className="-ml-px" />}
    </button>
  );
});

SubmitButton.displayName = "SubmitButton";
