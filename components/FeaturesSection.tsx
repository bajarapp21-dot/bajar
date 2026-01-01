"use client";

import { useRef } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export function PublicInstitutionsSection() {
  const containerRef = useRef(null);

  // Updated List Data according to your request
  const features = [
    { 
      text: "Resmi Hesaplar", 
      sub: "Güvenilir bilgi", 
      sub2: "Şeffaf iletişim",
      sub3: "Topluma açık erişim",
      isHeader: true 
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[80vh] flex items-center justify-center py-20 px-6 overflow-hidden bg-black border-t border-white/10"
      id="kamu-kurumlari"
    >
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* =========================================
            LEFT SIDE: IMAGE BLOCK
           ========================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center"
        >

          {/* THE IMAGE */}
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            <Image
              src="/public-institutions-badges.png"
              alt="Resmi Kurum Rozetleri ve Onay İşareti"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>

        {/* =========================================
            RIGHT SIDE: TEXT CONTENT
           ========================================= */}
        <div className="flex flex-col space-y-8 text-left">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Şehrin ortak aklı.
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg">
              Resmi duyurular, sosyal çalışmalar ve toplumu ilgilendiren her şey tek yerde.
            </p>
          </motion.div>

          {/* Feature List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
             {/* Main Feature Item */}
            <div className="flex items-start gap-4 group">
               {/* Icon Circle - Gray Check */}
               <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center flex-shrink-0 shadow-lg shadow-white/10 mt-1">
                  <Check className="w-5 h-5 stroke-[3] text-black" />
               </div>
               
               {/* Text Content */}
               <div className="flex flex-col">
                 <div className="flex items-center gap-2">
                    <span className="text-white font-bold text-xl group-hover:text-gray-200 transition-colors">
                      Resmi Hesaplar
                    </span>
                    <span className="text-gray-400 text-sm font-medium">(Gri onay)</span>
                 </div>
                 
                 {/* Bullet Points */}
                 <ul className="mt-2 space-y-2 ml-1">
                    <li className="text-gray-300 text-lg flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                        Güvenilir bilgi
                    </li>
                    <li className="text-gray-300 text-lg flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                        Şeffaf iletişim
                    </li>
                    <li className="text-gray-300 text-lg flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                        Topluma açık erişim
                    </li>
                 </ul>
               </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}