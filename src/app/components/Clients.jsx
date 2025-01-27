// "use client";

// import Image from "next/image";

// export default function Clients() {
//   return (
//     <div className="relative flex flex-col gap-8 overflow-hidden py-20">
//       {/* Top row - moving right */}
//       <div className="flex w-full">
//         <div className="animate-marquee-right flex min-w-full shrink-0 items-center justify-around gap-8">
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client1.png"
//               alt="Logo 1"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client2.png"
//               alt="Logo 2"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client3.png"
//               alt="Logo 3"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client4.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client5.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client6.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client7.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client8.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client9.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client10.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client11.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client12.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client13.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client14.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client15.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//         </div>
//         <div
//           aria-hidden="true"
//           className="animate-marquee-right flex min-w-full shrink-0 items-center justify-around gap-8"
//         >
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client1.png"
//               alt="Logo 1"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client2.png"
//               alt="Logo 2"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client3.png"
//               alt="Logo 3"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client4.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client5.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client6.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client7.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client8.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client9.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client10.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client11.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client12.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client13.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client14.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client15.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Bottom row - moving left */}
//       <div className="flex w-full">
//         <div className="animate-marquee-left flex min-w-full shrink-0 items-center justify-around gap-8">
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client15.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client14.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client13.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client12.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client11.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client10.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client9.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client8.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client7.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client6.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client5.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client4.png"
//               alt="Logo 1"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client3.png"
//               alt="Logo 2"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client2.png"
//               alt="Logo 3"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client1.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//         </div>
//         <div
//           aria-hidden="true"
//           className="animate-marquee-left flex min-w-full shrink-0 items-center justify-around gap-8"
//         >
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client15.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client14.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client13.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client12.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client11.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client10.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client9.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client8.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client7.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client6.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client5.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client4.png"
//               alt="Logo 1"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client3.png"
//               alt="Logo 2"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client2.png"
//               alt="Logo 3"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//           <div className="flex h-20 w-48 items-center justify-center">
//             <Image
//               src="/images/client1.png"
//               alt="Logo 4"
//               width={192}
//               height={80}
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { ClientLogo } from "./Client-logo";

const clients = Array.from({ length: 14 }, (_, i) => ({
  src: `/images/client${i + 1}.png`,
  alt: `Client ${i + 1} logo`,
}));

function MarqueeRow({ direction }) {
  return (
    <div className="flex w-full">
      {[0, 1].map((_, index) => (
        <div
          key={index}
          className={`animate-marquee-${direction} flex min-w-full shrink-0 items-center justify-around gap-8`}
          aria-hidden={index === 1}
        >
          {clients.map((client, clientIndex) => (
            <ClientLogo key={clientIndex} {...client} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Clients() {
  return (
    <div className="relative flex flex-col gap-8 overflow-hidden py-20">
      <MarqueeRow direction="right" />
      <MarqueeRow direction="left" />
    </div>
  );
}
