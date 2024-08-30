import { ImageResponse } from "next/server";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

interface FaviconProps {
  url: string;
}
declare module "next/server" {
  export class ImageResponse {
    constructor(content: React.ReactNode, options?: { width: number; height: number; headers?: Record<string, string> });
  }
}
export function Favicon({ url }: FaviconProps) {
  return new (ImageResponse as any)(
    (
      <div
        style={{
          background: "none",
          width: "50%",
          height: "50%",
          backgroundImage: `url(${url})`,
          backgroundSize: `${size.width}px ${size.height}px`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      />
    ),
    {
      ...size,
      headers: {
        "Content-Type": contentType,
      },
    }
  );
}
