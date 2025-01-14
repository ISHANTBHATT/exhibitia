// "use client";

// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";

// export default function ContactPage() {
//   return (
//     <div className="min-h-screen bg-[#1a1a1a] text-white relative">
//       <div className="container mx-auto px-4 py-12">
//         <div className="mb-8">
//           <h2 className="text-sm uppercase tracking-wider mb-2">
//             OUR HEAD OFFICE
//           </h2>
//           <h1 className="text-4xl md:text-5xl font-bold">
//             Connect With Us Today?
//           </h1>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Map Section */}
//           <div className="w-full h-[500px] bg-gray-200 rounded-lg overflow-hidden">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654246115632!2d-87.78192368426528!3d41.89680397922119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v163130251243!5m2!1sen!2sus"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>

//           {/* Contact Form */}
//           <Card className="p-8 bg-[#8B8455] text-white">
//             <form className="space-y-8">
//               <div className="space-y-6">
//                 <h2 className="text-2xl font-semibold">Personal Information</h2>
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="firstName" className="text-white">
//                       First Name*
//                     </Label>
//                     <Input
//                       id="firstName"
//                       placeholder="Enter your first name"
//                       className="bg-white text-black"
//                       required
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="lastName" className="text-white">
//                       Last Name*
//                     </Label>
//                     <Input
//                       id="lastName"
//                       placeholder="Enter your last name"
//                       className="bg-white text-black"
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="email" className="text-white">
//                     Email*
//                   </Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     placeholder="Enter your email"
//                     className="bg-white text-black"
//                     required
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="phone" className="text-white">
//                     Phone*
//                   </Label>
//                   <Input
//                     id="phone"
//                     type="tel"
//                     placeholder="Enter your phone number"
//                     className="bg-white text-black"
//                     required
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="message" className="text-white">
//                     Message*
//                   </Label>
//                   <Textarea
//                     id="message"
//                     placeholder="Enter your message"
//                     className="bg-white text-black min-h-[120px]"
//                     required
//                   />
//                 </div>
//               </div>

//               <Button
//                 type="submit"
//                 className="w-full bg-black hover:bg-gray-900 text-white py-6"
//               >
//                 Send Message
//               </Button>
//             </form>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userEmail: email,
        userFirstName: firstName,
        userLastName: lastName,
        phone: phone,
        message: message,
      }),
    });
    setIsLoading(false);
  };
  return (
    <div className="min-h-screen  text-white py-10">
      {/* Header Section */}
      {/* <div className="relative h-[200px] bg-secondary">
        <div
          className="absolute inset-0 bg-center bg-cover "
          // style={{ backgroundImage: `url(images/demo1.jpg)` }}
        >
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-8">
            <h1 className="text-6xl font-bold text-white mb-2">Contact</h1>
            <div className="text-white/80 flex items-center gap-2 text-sm">
              <Link href="/" className="hover:text-white">
                HOME
              </Link>
              <span>/</span>
              <span>CONTACT</span>
            </div>
          </div>
        </div>
      </div> */}

      <div className="relative flex justify-around py-20 text-white">
        <div className="absolute top-0 left-0 w-full h-full bg-secondary -z-10 clip-diagonal"></div>
        <div className="px-4 h-full flex flex-col justify-end pb-8">
          <h1 className="text-6xl font-bold text-white mb-2">Contact</h1>
          <div className="text-white/80 flex items-center gap-2 text-sm">
            <Link href="/" className="hover:text-white">
              HOME
            </Link>
            <span>/</span>
            <span>CONTACT</span>
          </div>
        </div>
        <Image
          src="/images/contact2.png"
          alt="carrer"
          width={1000}
          height={100}
          className="w-80 hidden sm:flex"
        />
      </div>
      <header className="bg-white text-secondary py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">
            Exhibitia Designs
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>42 Harbour View Road, NSW 2000 Australia</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>sunitkataria68@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>9999797730,</span>
              <span>9999794303</span>
            </div>
          </div>
        </div>
      </header>

      {/* Existing Contact Section */}
      <div className="container mx-auto px-10 py-12 bg-secondary">
        <div className="mb-8">
          <h2 className="text-sm uppercase tracking-wider mb-2">
            OUR HEAD OFFICE
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold">
            Connect With Us Today?
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map Section */}
          <div className="w-full h-[500px] bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654246115632!2d-87.78192368426528!3d41.89680397922119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v163130251243!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Form */}
          <Card className="p-8  text-secondary">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Personal Information</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name*</Label>
                    <Input
                      id="firstName"
                      placeholder="Enter your first name"
                      className="bg-white text-black"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name*</Label>
                    <Input
                      id="lastName"
                      placeholder="Enter your last name"
                      className="bg-white text-black"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email*</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white text-black"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone*</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="bg-white text-black"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message*</Label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    className="bg-white text-black min-h-[120px]"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-secondary hover:bg-neutral-700 text-white py-6"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>

      {/* Clients Section */}
      <section className="bg-white text-black py-16">
        <div className="flex lg:flex-row flex-col justify-between px-10">
          <div className="flex flex-col gap-10 mb-12">
            <div>
              <p className="text-[#8B8455] mb-2">OUR CLIENTS</p>
              <h2 className="text-4xl font-bold">
                Trusted By Biggest Business
              </h2>
            </div>
            <Button className="w-40 bg-secondary hover:bg-neutral-700 text-white">
              Be Our Next Client
            </Button>
          </div>

          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="aspect-[3/2] flex items-center justify-center bg-gray-50 rounded-lg p-6"
              >
                <img src={client.img} alt="" className="max-w-[120px] h-auto" />
              </div>
            ))}
          </div> */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((partner) => (
              <Card
                key={partner.id}
                className="p-6 flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <img
                  src={partner.img}
                  alt=""
                  className="max-w-[160px]  h-auto"
                />
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const clients = [
  { id: 1, img: "/images/client1.png" },
  { id: 2, img: "/images/client2.png" },
  { id: 3, img: "/images/client3.png" },
  { id: 4, img: "/images/client4.png" },
  { id: 5, img: "/images/client5.png" },
  { id: 6, img: "/images/client6.jpg" },
  { id: 7, img: "/images/client1.png" },
  { id: 8, img: "/images/client2.png" },
];
