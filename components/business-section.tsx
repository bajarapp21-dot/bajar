"use client";

import Image from "next/image";
import {
  FaStore,
  FaRegQuestionCircle,
  FaUserPlus,
  FaBullhorn,
  FaCheckCircle, // Yellow Check icon
  FaUsers,
} from "react-icons/fa";
import { MdCampaign } from "react-icons/md";
import { motion, easeOut } from "framer-motion";

export default function BusinessHeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, transition: { duration: 0.5, ease: easeOut } },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: easeOut } },
  };

  return (
    <section
      id="isletmeler"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden border-t border-white/10 bg-black"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/business-man-bg.jpg"
          alt="Business hero background"
          fill
          className="object-cover object-center top-0.5"
          sizes="100vw"
          quality={90}
          priority
        />
        {/* Optional overlay for better text contrast if needed */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-8xl px-6 md:px-12 py-16 flex items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            flex flex-col items-start
            max-w-xl
            ml-0 lg:ml-20
            relative
            -left-4 sm:-left-8
          "
        >
          {/* 1. HEADING */}
          <motion.h1
            variants={itemVariants}
            className="
              text-4xl sm:text-5xl md:text-7xl
              font-extrabold
              leading-tight
              mb-4
              text-gray-200
              drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]
            "
          >
            <span className="block bg-clip-text">
              Esnaf değil,
            </span>
            <span className="text-gray-300">şehrin markası</span>
            <span className="text-gray-300"> ol.</span>
          </motion.h1>

          {/* 2. DESCRIPTION */}
          <motion.p
            variants={itemVariants}
            className="
              text-gray-300
              text-lg sm:text-xl md:text-2xl
              leading-relaxed
              mt-4 mb-8
              max-w-lg
            "
          >
            Mekânını, markanı ve hikâyeni şehrin gerçek akışında büyüt.
          </motion.p>

          {/* 3. LIST (Updated Text) */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col gap-5 mb-10 w-full"
          >
            {[
              {
                icon: <FaCheckCircle />,
                text: "Doğrulanmış işletme", // Updated
                sub: "(Sarı onay)",          // Updated
                color: "text-yellow-400",
                borderColor: "border-yellow-400/20 bg-yellow-400/10",
              },
              {
                icon: <MdCampaign />,
                text: "Öne çıkan paylaşımlar",
                color: "text-white",
                borderColor: "border-white/20 bg-white/5",
              },
              {
                icon: <FaStore />,
                text: "Yerel görünürlük",
                color: "text-white",
                borderColor: "border-white/20 bg-white/5",
              },
              {
                icon: <FaUsers />,
                text: "Şehirle bağ kuran etkileşim",
                color: "text-white",
                borderColor: "border-white/20 bg-white/5",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-center gap-4"
              >
                {/* Icon Circle */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border ${item.borderColor}`}
                >
                  <span className={`text-xl ${item.color}`}>{item.icon}</span>
                </div>

                {/* Text */}
                <div className="flex flex-col">
                  <span className="text-white text-lg font-semibold leading-none">
                    {item.text}
                  </span>
                  {item.sub && (
                    <span className="text-gray-400 text-xs mt-1 font-medium opacity-80">
                      {item.sub}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* 4. BUTTONS */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button className="px-8 py-4 rounded-xl bg-[#9fcc2e] hover:bg-[#8eb629] text-white font-bold text-lg shadow-[0_0_20px_rgba(159,204,46,0.4)] transition-all flex items-center justify-center gap-3 hover:scale-105">
              <FaBullhorn size={20} />
              Hemen İlan Ver
            </button>

            <div className="flex gap-4 w-full sm:w-auto">
              <button className="flex-1 sm:flex-none px-6 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 transition flex items-center justify-center gap-2">
                <FaUserPlus /> Kayıt Ol
              </button>
              <button className="flex-1 sm:flex-none px-6 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 transition flex items-center justify-center gap-2">
                <FaRegQuestionCircle /> Bilgi Al
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}