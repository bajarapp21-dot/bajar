"use client";

import Image from "next/image";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Types
interface SocialLink {
  id: number;
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}

export function Footer() {
  // Social media links
  const socialLinks: SocialLink[] = [
    {
      id: 1,
      name: "Instagram",
      icon: <FaInstagram size={16} />,
      url: "https://instagram.com/bajar",
      color: "hover:text-pink-500",
    },
    {
      id: 2,
      name: "Twitter",
      icon: <FaTwitter size={16} />,
      url: "https://twitter.com/bajar",
      color: "hover:text-blue-400",
    },
    {
      id: 3,
      name: "Facebook",
      icon: <FaFacebookF size={16} />,
      url: "https://facebook.com/bajar",
      color: "hover:text-blue-600",
    },
    {
      id: 4,
      name: "YouTube",
      icon: <FaYoutube size={16} />,
      url: "https://youtube.com/bajar",
      color: "hover:text-red-600",
    },
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden font-sans border-t border-white/10">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#9fcc2e]/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* --- TOP SECTION: Big CTA Text + Buttons --- */}
        <div className="py-20 flex flex-col items-center justify-center text-center relative">
          {/* Headline - UPDATED */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-8"
          >
            Amed şehrim benim.
          </motion.h2>

          {/* Buttons (Hero Style) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            {/* App Store Button */}
            <button className="flex items-center justify-center gap-3 h-14 px-8 rounded-full bg-[#9fcc2e] text-white font-bold text-lg shadow-[0_0_20px_rgba(159,204,46,0.3)] hover:shadow-[0_0_30px_rgba(159,204,46,0.5)] hover:bg-[#8eb629] transition-all w-full sm:w-auto group">
              <FaApple className="text-2xl" />
              <span>App Store</span>
            </button>

            {/* Google Play Button */}
            <button className="flex items-center justify-center gap-3 h-14 px-8 rounded-full bg-[#9fcc2e] text-white font-bold text-lg shadow-[0_0_20px_rgba(159,204,46,0.3)] hover:shadow-[0_0_30px_rgba(159,204,46,0.5)] hover:bg-[#8eb629] transition-all w-full sm:w-auto group">
              <FaGooglePlay className="text-xl" />
              <span>Google Play</span>
            </button>
          </motion.div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* LEFT: Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <Image
                src="/bajar-logo.png"
                alt="Bajar Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Bajar
              <span className="text-[#9fcc2e] text-xs align-top ml-0.5">®</span>
            </span>
          </div>

          {/* CENTER: Copyright */}
          <div className="text-gray-500 text-sm">
            © 2025 Bajar Inc. Tüm hakları saklıdır.
          </div>

          {/* RIGHT: Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 transition-colors ${social.color}`}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}