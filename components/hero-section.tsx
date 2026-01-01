"use client";

import { useState, useCallback, useRef } from "react";
import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax effect
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const textY = useTransform(scrollY, [0, 400], [0, 50]);

  const trackDownloadEvent = useCallback(
    (storeName: string, location: string) => {
      if (typeof window !== "undefined") {
        console.log(
          `Tracking Event: Download clicked for ${storeName} from ${location}`
        );

        // GA4
        if ((window as any).gtag) {
          (window as any).gtag("event", "app_download_click", {
            store: storeName,
            location: location,
            event_category: "Download",
            event_label: `${storeName}_${location}`,
          });
        }

        // Facebook Pixel
        if ((window as any).fbq) {
          (window as any).fbq("track", "Download", {
            store: storeName,
            location: location,
          });
        }
      }
    },
    []
  );

  const handleAppStoreClick = useCallback(() => {
    trackDownloadEvent("App Store", "Hero Section");
    window.open(
      "https://apps.apple.com/tr/app/your-app-id",
      "_blank",
      "noopener noreferrer"
    );
  }, [trackDownloadEvent]);

  const handlePlayStoreClick = useCallback(() => {
    trackDownloadEvent("Google Play", "Hero Section");
    window.open(
      "https://play.google.com/store/apps/details?id=com.yourapp",
      "_blank",
      "noopener noreferrer"
    );
  }, [trackDownloadEvent]);

  const scrollToContent = useCallback(() => {
    const nextSection = document.getElementById("kesfet");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Optimized Background with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image
          src="/diyarbakir-cityscape-skyline-sunset-panoramic.jpg"
          alt="Diyarbakır Cityscape"
          fill
          className={`object-cover transition-all duration-1000 ease-out ${
            imageLoaded ? "scale-105 opacity-60" : "scale-110 opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          priority
          quality={90}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-[#0a0a0a]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
        style={{ opacity, y: textY }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6">
          Amed’in <br className="md:hidden" />
          <motion.span
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="inline-block pb-2"
          >
            dijital yüzü.
          </motion.span>
        </h1>

        {/* Subheadline - Updated Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl font-light leading-relaxed"
        >
          Şehrine özgü sosyal medya, topluluk ve pratik yaşam akışı.
          <br className="hidden md:block" />
          Haydi, şehrini yeniden keşfet.
        </motion.p>

        {/* Buttons */}
       <motion.div
  className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1 }}
>
  {/* App Store Button */}
  <motion.button
    onClick={handleAppStoreClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center justify-center gap-3 h-14 px-8 rounded-full bg-[#9fcc2e] text-white font-bold text-lg shadow-[0_0_20px_rgba(159,204,46,0.3)] hover:shadow-[0_0_30px_rgba(159,204,46,0.5)] hover:bg-[#8eb629] transition-all w-full sm:w-auto group"
  >
    <FaApple className="text-2xl" />
    <span>App Store</span>
  </motion.button>

  {/* Google Play Button - Fixed to match Theme */}
  <motion.button
    onClick={handlePlayStoreClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center justify-center gap-3 h-14 px-8 rounded-full bg-[#9fcc2e] text-white font-bold text-lg shadow-[0_0_20px_rgba(159,204,46,0.3)] hover:shadow-[0_0_30px_rgba(159,204,46,0.5)] hover:bg-[#8eb629] transition-all w-full sm:w-auto group"
  >
    <FaGooglePlay className="text-xl" />
    <span>Google Play</span>
  </motion.button>
</motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 p-3 hover:bg-white/10 rounded-full cursor-pointer transition-colors z-30"
        aria-label="Aşağı Kaydır"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.5,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <ChevronDown className="w-8 h-8 text-white/50 hover:text-[#A4D055] transition-colors" />
      </motion.button>
    </section>
  );
}
