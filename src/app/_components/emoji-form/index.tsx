"use client"

import { useEffect, useRef, useState } from "react"
import { useForm, FieldError } from "react-hook-form"
import { createEmoji } from "./action"
import { SubmitButton } from "./submit-button"
import toast from "react-hot-toast"
import useSWR from "swr"

interface EmojiFormProps {
  initialPrompt?: string
}

interface FormData {
  prompt: string;
  token: string;
}

export function EmojiForm({ initialPrompt }: EmojiFormProps) {
  const { register, handleSubmit, formState } = useForm<FormData>()
  const submitRef = useRef<React.ElementRef<"button">>(null)
  const [token, setToken] = useState("")

  useEffect(() => {
    if (formState.errors) {
      Object.values(formState.errors).forEach((error) => {
        const fieldError = error as FieldError
        if (fieldError && fieldError.message) {
          toast.error(fieldError.message)
        }
      })
    }
  }, [formState])

  useSWR(
    "/api/token",
    async (url: string) => {
      const res = await fetch(url)
      const json = await res.json()
      return json?.token ?? ""
    },
    {
      onSuccess: (token) => setToken(token),
    }
  )

  const onSubmit = async (data: FormData) => {
    try {
      await createEmoji(data, token)
      // 성공 처리 (예: 토스트 메시지 표시)
      toast.success("이모지가 성공적으로 생성되었습니다!")
    } catch (error) {
      // 오류 처리
      toast.error("이모지 생성에 실패했습니다.")
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-black rounded-xl shadow-lg h-fit flex flex-row px-1 items-center w-full">
      <input
        defaultValue={initialPrompt}
        type="text"
        {...register("prompt")}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault()
            submitRef.current?.click()
          }
        }}
        placeholder="휴"
        className="bg-transparent text-white placeholder:text-gray-400 ring-0 outline-none resize-none py-2.5 px-2 font-mono text-sm h-10 w-full transition-all duration-300"
      />
      <input aria-hidden type="text" {...register("token")} value={token} className="hidden" readOnly />
      <SubmitButton ref={submitRef} />
    </form>
  )
}
