"use client"

import { useEffect, useRef, useState } from "react"
import { useForm, FieldValues } from "react-hook-form"
import { createEmoji } from "./action"
import { SubmitButton } from "./submit-button"
import toast from "react-hot-toast"
import useSWR from "swr"

interface EmojiFormProps {
  initialPrompt?: string
}

interface FormData extends FieldValues {
  prompt: string;
  token: string;
}

export function EmojiForm({ initialPrompt }: EmojiFormProps) {
  const { register, handleSubmit, formState } = useForm<FormData>()
  const submitRef = useRef<React.ElementRef<"button">>(null)
  const [token, setToken] = useState("")

  useEffect(() => {
    const errors = Object.values(formState.errors);
    if (errors.length > 0) {
      errors.forEach((error) => {
        if (error && typeof error.message === 'string') {
          toast.error(error.message);
        }
      });
    }
  }, [formState.errors])

  useSWR<string>(
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

  const onSubmit = (data: FormData) => {
    createEmoji(data)
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
