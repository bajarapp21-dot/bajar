"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export function PracticalLifeSection() {
  // Güncellenmiş Hizmet Listesi
  const services = [
    "Nöbetçi eczane",
    "Taksi çağır",
    "İş ilanları",
    "Emlak",
    "Otobüs rotaları",
    "Etkinlikler",
    "Ev hizmetleri",
    "Gezi",
    "Konaklama",
    "Yemek siparişi",
    "Oto al-sat",
  ];

  return (
    <section
      id="pratik-yasam"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black border-t border-white/10 py-20"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* --- LEFT SIDE: TEXT & LIST --- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col space-y-8"
        >
          {/* Heading */}
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
              Şehir elinin altında.
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl font-light">
              Günlük hayatı kolaylaştıran her şey tek akışta.
            </p>
          </div>

          {/* Services Grid List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 group"
              >
                {/* Green Checkmark Box */}
                <div className="w-6 h-6 rounded-full bg-[#9fcc2e] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-white" />
                </div>

                {/* Service Text */}
                <span className="text-gray-200 text-lg font-medium group-hover:text-white transition-colors">
                  {service}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Optional: Explore Button */}
          <div className="pt-4">
            <button className="px-8 py-3 rounded-xl border bg-[#9fcc2e] border-white/30 text-white hover:shadow-[0_0_30px_rgba(159,204,46,0.5)] hover:bg-[#8eb629] transition-all w-full sm:w-auto group">
              Hepsini Keşfet
            </button>
          </div>
        </motion.div>

        {/* --- RIGHT SIDE: IMAGE --- */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[300px] md:h-[500px] flex items-center justify-center"
        >
          {/* Container for the image with Glow */}
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/practical-life-image.jpg"
              alt="Pratik Yaşam Hizmetleri"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Background Glow behind image */}
          {/* <div className="absolute inset-0 bg-[#9fcc2e]/10 blur-3xl -z-10 rounded-full" /> */}
        </motion.div>
      </div>
    </section>
  );
}
