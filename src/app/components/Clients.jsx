"use client";

import Image from "next/image";

export default function Clients() {
  return (
    <div className="relative flex flex-col gap-8 overflow-hidden bg-white py-20">
      {/* Top row - moving right */}
      <div className="flex w-full">
        <div className="animate-marquee-right flex min-w-full shrink-0 items-center justify-around gap-8">
          <div className="flex h-20 w-48 items-center justify-center">
            <Image
              src="/images/client1.png"
              alt="Logo 1"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-20 w-48 items-center justify-center">
            <Image
              src="/images/client2.png"
              alt="Logo 2"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-20 w-48 items-center justify-center">
            <Image
              src="/images/client3.png"
              alt="Logo 3"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-20 w-48 items-center justify-center">
            <Image
              src="/images/client4.png"
              alt="Logo 4"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
        <div
          aria-hidden="true"
          className="animate-marquee-right flex min-w-full shrink-0 items-center justify-around gap-8"
        >
          <div className="flex h-20 w-48 items-center justify-center">
            <Image
              src="/images/client1.png"
              alt="Logo 1"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-20 w-48 items-center justify-center">
            <Image
              src="/images/client2.png"
              alt="Logo 2"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-20 w-48 items-center justify-center">
            <Image
              src="/images/client3.png"
              alt="Logo 3"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-20 w-48 items-center justify-center">
            <Image
              src="/images/client4.png"
              alt="Logo 4"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom row - moving left */}
      <div className="flex w-full">
        <div className="animate-marquee-left flex min-w-full shrink-0 items-center justify-around gap-8">
          <div className="flex h-20 w-48 items-center justify-center">
            <Image
              src="/images/client4.png"
              alt="Logo 1"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-20 w-48 items-center justify-center">
            <Image
              src="/images/client3.png"
              alt="Logo 2"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-20 w-48 items-center justify-center">
            <Image
              src="/images/client2.png"
              alt="Logo 3"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-20 w-48 items-center justify-center">
            <Image
              src="/images/client1.png"
              alt="Logo 4"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
        <div
          aria-hidden="true"
          className="animate-marquee-left flex min-w-full shrink-0 items-center justify-around gap-8"
        >
          <div className="flex h-20 w-48 items-center justify-center">
            <Image
              src="/images/client4.png"
              alt="Logo 1"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-20 w-48 items-center justify-center">
            <Image
              src="/images/client3.png"
              alt="Logo 2"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-20 w-48 items-center justify-center">
            <Image
              src="/images/client2.png"
              alt="Logo 3"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-20 w-48 items-center justify-center">
            <Image
              src="/images/client1.png"
              alt="Logo 4"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
