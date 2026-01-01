"use client"

import { useRef, useState, useCallback } from "react"
import Image from "next/image"
import { 
  ArrowUpRight, 
  Calendar, 
  MapPin, 
  UtensilsCrossed, 
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Star,
  Clock,
  Sparkles,
  TrendingUp,
} from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { motion, AnimatePresence } from 'framer-motion'

// Swiper CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Types
interface DiscoveryItem {
  id: number
  title: string
  subtitle: string
  image: string
  colorClass?: string
}

export function CityDiscoverySection() {
  const swiperRef = useRef<SwiperType>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Card Data
  const discoveryItems: DiscoveryItem[] = [
    {
      id: 1,
      title: "Şehirde Bugün",
      subtitle: "Neler Var?",
      image: "/history-card.png", 
      colorClass: "from-blue-500/20 to-purple-500/20"
    },
    {
      id: 2,
      title: "Lezzet",
      subtitle: "Durakları",
      image: "/food-card.png", 
      colorClass: "from-amber-500/20 to-orange-500/20"
    },
    {
      id: 3,
      title: "Tarihi",
      subtitle: "Mekanlar",
      image: "/history-card.png", 
      colorClass: "from-emerald-500/20 to-green-500/20"
    },
    {
      id: 4,
      title: "Alışveriş",
      subtitle: "Keyfi",
      image: "/market-card.png", 
      colorClass: "from-violet-500/20 to-purple-500/20"
    }
  ]

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex)
  }, [])

  const handlePrev = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev()
    }
  }, [])

  const handleNext = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.slideNext()
    }
  }, [])

  return (
    <section 
      id="kesfet" 
      className="relative py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-[#0a0a0a] to-black scroll-mt-20 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#9fcc2e]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- Layout: Fixed 40% Left - 60% Right --- */}
       <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
  
  {/* --- LEFT COLUMN: Text Content --- */}
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="lg:w-2/5 lg:sticky lg:top-32 space-y-8 z-20"
  >
    
    <div className="space-y-6">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
        Bugün ne var?
      </h2>
      
      <p className="text-lg text-gray-400 leading-relaxed">
        Şehrinde olup biten her şey, tek akışta.
        <br />
        Haberler, etkinlikler, paylaşımlar, duyurular.
        <br />
        Aramak yok. Kaçırmak yok.
      </p>
    </div>
    
    {/* Button Group */}
    <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
      {/* --- UPDATED BUTTON COLOR HERE --- */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-[#9fcc2e] text-white font-bold hover:bg-[#8bb329] hover:shadow-[0_0_20px_rgba(159,204,46,0.4)] transition-all"
      >
        Tümünü Gör 
        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </motion.button>
      
      {/* Slider Controls (Desktop) */}
      <div className="hidden lg:flex gap-3">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePrev}
          className="w-14 h-14 rounded-full border border-white/10 bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-[#9fcc2e] hover:text-black hover:border-[#9fcc2e] transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
          className="w-14 h-14 rounded-full border border-white/10 bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-[#9fcc2e] hover:text-black hover:border-[#9fcc2e] transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  </motion.div>
  
  {/* --- RIGHT COLUMN: Slider --- */}
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="lg:w-3/5 w-full min-w-0 relative rounded-3xl"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    {/* Container with overflow hidden to keep swipes clean */}
    <div className="relative rounded-3xl p-2 bg-gradient-to-br from-white/5 to-transparent overflow-hidden">
      <div className="relative w-full h-full">
        
        {/* Slider */}
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          onSlideChange={handleSlideChange}
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ 
            clickable: true,
            el: '.custom-pagination',
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 1.5 },
            1280: { slidesPerView: 2 },
          }}
          className="w-full h-full !overflow-visible"
        >
          {discoveryItems.map((item, index) => (
           <SwiperSlide key={item.id} className="h-auto">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    // Added 'group' here to control children on hover
    className="group relative h-[500px] w-full overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 cursor-pointer transition-all duration-500 hover:border-[#9fcc2e]/50 hover:shadow-[0_20px_60px_-15px_rgba(159,204,46,0.3)]"
    style={{
      boxShadow: isHovered ? '0 20px 60px -15px rgba(159, 204, 46, 0.2)' : '0 10px 30px -5px rgba(0, 0, 0, 0.3)'
    }}
  >
    
    {/* Background Gradient Overlay */}
    <div className={`absolute inset-0 bg-gradient-to-br ${item.colorClass || 'from-zinc-900/50 to-black/50'} opacity-50 z-10 pointer-events-none`} />
    
    {/* Image Container */}
    <div className="absolute inset-0 h-full w-full">
      <div className="absolute inset-0 bg-zinc-800" />
      <Image
        src={item.image}
        alt={`${item.title} ${item.subtitle}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
        priority={index < 2}
      />
    </div>

    {/* Dark Gradient for Text Readability */}
    {/* Made darker at bottom to support text readability */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

    {/* Bottom Content Area */}
    <div className="absolute bottom-0 left-0 p-8 w-full z-20 flex flex-col justify-end">
      
      {/* 2. Title & Subtitle - ALWAYS VISIBLE */}
      <h3 className="text-3xl font-bold text-white mb-2 leading-tight transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
        {item.title}{" "}
        <span >{item.subtitle}</span>
      </h3>
      
      {/* 3. Description & Button - HIDDEN initially */}
      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500">
        <div className="overflow-hidden">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">             
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium hover:bg-[#9fcc2e] hover:text-white hover:border-[#9fcc2e] transition-all">
              İncele
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

    </div>
    
    {/* Hover Glow */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#9fcc2e]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
  </motion.div>
</SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Pagination Controls */}
      <div className="flex items-center justify-between mt-8 px-2">
          <div className="custom-pagination flex items-center gap-2"></div>
          {/* Mobile Controls */}
          <div className="flex lg:hidden gap-3">
            <button onClick={handlePrev} className="w-12 h-12 rounded-full border border-white/10 bg-black/50 backdrop-blur-sm text-white flex items-center justify-center active:scale-95 transition-transform">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={handleNext} className="w-12 h-12 rounded-full border border-white/10 bg-black/50 backdrop-blur-sm text-white flex items-center justify-center active:scale-95 transition-transform">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
      </div>

    </div>
  </motion.div>
</div>
      </div>

      {/* Global Style Override for Swiper Pagination */}
      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background-color: rgba(255, 255, 255, 0.2);
          opacity: 1;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: linear-gradient(90deg, #9fcc2e, #84cc16);
          width: 32px;
          border-radius: 4px;
          transform: scale(1.2);
        }
        
        /* Ensure images don't overflow */
        .swiper-slide {
          height: auto;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </section>
  )
}