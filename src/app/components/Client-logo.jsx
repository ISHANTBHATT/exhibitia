import Image from "next/image";

export function ClientLogo({ src, alt }) {
  return (
    <div className="flex h-20 w-48 items-center justify-center">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={192}
        height={80}
        className="max-h-full max-w-full object-contain"
      />
    </div>
  );
}
