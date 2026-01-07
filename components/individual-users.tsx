"use client";

import { useRef } from "react";
import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { Check } from "lucide-react";
import { motion, useScroll, useTransform, easeOut } from "framer-motion";

export default function AppHeroSection() {
  const containerRef = useRef(null);

  // Parallax animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [30, -30]);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, transition: { duration: 0.6, ease: easeOut } },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: easeOut } },
  };

  return (
    <section 
      ref={containerRef} id="Kamu"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-12 bg-black"
    >
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8"
        >
          {/* =========================================
              CENTER: TEXT CONTENT
             ========================================= */}
          <div className="lg:w-1/3 flex flex-col items-center lg:items-center text-center order-1 lg:order-2">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg"
            >
              Şehrin ritmini yakala.
            </motion.h1>

            <motion.div variants={itemVariants} className="space-y-2 mb-8">
              <p className="text-xl md:text-2xl text-gray-300 font-medium">
                Gündemi takip et.
              </p>
              <p className="text-xl md:text-2xl text-gray-300 font-medium">
                Paylaş. Keşfet.
              </p>
              <p className="text-lg md:text-xl text-gray-400 mt-4 leading-relaxed">
                Şehrini yaşayanların gözünden gör.
              </p>
            </motion.div>

            {/* Store Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              {/* App Store Button */}
              <button className="group flex items-center justify-center sm:justify-start gap-3 bg-[#9fcc2e] text-black px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:bg-[#8eb629] shadow-[0_0_20px_rgba(159,204,46,0.3)] hover:shadow-[0_0_30px_rgba(159,204,46,0.5)] w-full sm:w-auto">
                <FaApple size={28} className="text-white" />
                <div className="text-left leading-tight">
                  
                  <div className="text-sm font-bold text-white">App Store</div>
                </div>
              </button>

              {/* Google Play Button */}
              <button className="group flex items-center justify-center sm:justify-start gap-3 bg-[#9fcc2e] text-black px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:bg-[#8eb629] shadow-[0_0_20px_rgba(159,204,46,0.3)] hover:shadow-[0_0_30px_rgba(159,204,46,0.5)] w-full sm:w-auto">
                <FaGooglePlay size={24} className="text-white" />
                <div className="text-left leading-tight">
                  
                  <div className="text-sm font-bold text-white">Google Play</div>
                </div>
              </button>
            </motion.div>
          </div>

          {/* =========================================
              LEFT: PHONE MOCKUP
             ========================================= */}
          <div className="lg:w-1/3 flex justify-center lg:justify-start order-2 lg:order-1 my-8 lg:my-0">
            <motion.div
              style={{ y: yParallax }}
              className="relative w-[280px] sm:w-[320px] lg:w-[340px] aspect-[9/19] z-20"
            >
              {/* Image Container with Custom Height as per your code */}
              <div 
                style={{ 
                  position: "absolute", 
                  height: "71%", 
                  width: "100%", 
                  left: 0, 
                  top: 0, 
                  right: 0 
                }}
                className="relative overflow-hidden"
              >
                <Image
                  src="/App Interface.png"
                  alt="App Interface"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 280px, 340px"
                />
              </div>
            </motion.div>
          </div>

          {/* =========================================
              RIGHT: FEATURE LIST
             ========================================= */}
          <div className="lg:w-1/3 flex justify-center lg:justify-end order-3 lg:order-3">
            <motion.div variants={itemVariants} className="space-y-6 w-full max-w-sm">
              {[
                { text: "Doğrulanmış profil", sub: "(Yeşil onay)" },
                { text: "Gürültüsüz akış", sub: "" },
                { text: "Gerçek insanlar", sub: "" },
                { text: "Gerçek şehir deneyimi", sub: "" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#9fcc2e] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#9fcc2e]/20">
                    <Check className="w-6 h-6 font-extrabold text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-200 font-medium text-lg leading-tight">
                      {item.text}
                    </span>
                    {item.sub && (
                      <span className="text-gray-400 text-sm font-normal">
                        {item.sub}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}