import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer3() {
  return (
    <footer className="bg-[#7A1CAC] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/logo2.png"
                alt="logo"
                width={150}
                height={150}
                className=""
              />
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <Input
                placeholder="Enter your Mail ID"
                className="bg-transparent border-white/20"
              />
              <Button variant="secondary">→</Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5" />
              <Instagram className="w-5 h-5" />
              <Twitter className="w-5 h-5" />
              <Linkedin className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-sm text-white/60">
          <p>© 2024 Exhibitia. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
