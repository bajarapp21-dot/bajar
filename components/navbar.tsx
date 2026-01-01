"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronRight, Download } from "lucide-react" 
import { FaApple, FaGooglePlay } from "react-icons/fa" 
import { motion, AnimatePresence } from "framer-motion"

// Types
interface MenuItem {
  id: string
  label: string
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDownloadOpen, setIsDownloadOpen] = useState(false)

  // 1. SCROLL LOCK EFFECT: Jab menu open ho, background scroll na ho
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.download-dropdown') && !target.closest('.download-button')) {
        setIsDownloadOpen(false)
      }
    }
    if (isDownloadOpen) {
      document.addEventListener('click', handleClickOutside)
    }
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isDownloadOpen])

  const trackDownloadEvent = useCallback((storeName: string, location: string) => {
    if (typeof window !== "undefined") {
      console.log(`Tracking: ${storeName} clicked on ${location}`)
      if ((window as any).gtag) {
        (window as any).gtag('event', 'download_click', {
          store: storeName,
          location: location,
          page_path: window.location.pathname
        })
      }
    }
  }, [])

  const menuItems: MenuItem[] = [
    { id: "hero", label: "Anasayfa" },
    { id: "kesfet", label: "Keşfet" },
    { id: "Kamu", label: "Bireysel" },
    { id: "isletmeler", label: "İşletme" },
    { id: "kamu-kurumlari", label: "Kamu&STK" },
    { id: "pratik-yasam", label: "Pratik" },
  ]

  const scrollToSection = useCallback((id: string) => {
    setIsMobileMenuOpen(false); // Menu pehle band karein
    
    if (id === "hero") {
       window.scrollTo({ top: 0, behavior: "smooth" });
       return;
    }

    // Thoda delay taake menu close animation complete ho jaye
    setTimeout(() => {
        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }, 300);
  }, [])

  const handleAppStoreClick = useCallback(() => {
    trackDownloadEvent('App Store', 'Navbar')
    window.open("https://apps.apple.com/tr/app/your-app-id", "_blank", "noopener noreferrer")
  }, [trackDownloadEvent])

  const handlePlayStoreClick = useCallback(() => {
    trackDownloadEvent('Google Play', 'Navbar')
    window.open("https://play.google.com/store/apps/details?id=com.yourapp", "_blank", "noopener noreferrer")
  }, [trackDownloadEvent])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
          isScrolled || isMobileMenuOpen // Mobile menu open ho to bhi background black rakhein
            ? "bg-black/90 border-b border-white/10 py-3" 
            : "bg-gradient-to-b from-black/50 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-3 z-50 group relative"
              aria-label="Bajar Home"
              onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
              }}
            >
              <div className="relative w-9 h-9 transition-transform group-hover:scale-110">
                <Image
                  src="/bajar-logo.png"
                  alt="Bajar Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 40px, 36px"
                />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Bajar<span className="text-[#9fcc2e] text-xs align-super ml-0.5">®</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5">
                {menuItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-1.5 text-sm font-medium text-gray-300 hover:text-white transition-colors relative group whitespace-nowrap"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#9fcc2e] group-hover:w-3/4 transition-all duration-300 rounded-full" />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Desktop Download Button */}
            <div className="hidden md:block relative download-dropdown">
              <motion.button
                onClick={() => setIsDownloadOpen(!isDownloadOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="download-button flex items-center gap-2 bg-[#9fcc2e] text-white hover:bg-[#8eb629] px-6 py-2.5 rounded-full font-bold transition-all duration-300 border-0 shadow-[0_0_20px_rgba(159,204,46,0.3)] hover:shadow-[0_0_30px_rgba(159,204,46,0.5)]"
              >
                {isDownloadOpen ? <X size={18} strokeWidth={3} /> : <Download size={18} strokeWidth={3} />}
                <span>İndir</span>
              </motion.button>

              <AnimatePresence>
                {isDownloadOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-3 w-56 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50"
                  >
                    <div className="p-2 flex flex-col gap-1">
                      <button 
                        onClick={handleAppStoreClick} 
                        className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/5 hover:text-[#9fcc2e] rounded-xl transition-all duration-200 group"
                      >
                        <FaApple size={20} className="text-gray-300 group-hover:text-[#9fcc2e]" /> 
                        <span className="flex-1 text-left font-medium">App Store</span>
                        <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all text-[#9fcc2e]" />
                      </button>
                      <button 
                        onClick={handlePlayStoreClick} 
                        className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/5 hover:text-[#9fcc2e] rounded-xl transition-all duration-200 group"
                      >
                        <FaGooglePlay size={18} className="text-gray-300 group-hover:text-[#9fcc2e]" /> 
                        <span className="flex-1 text-left font-medium">Google Play</span>
                        <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all text-[#9fcc2e]" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button 
              className="md:hidden text-white z-[60] p-2 ml-4 relative" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label={isMobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // CHANGE 2: padding-top-24 (taake header ke neeche aye) aur justify-center hataya
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden flex flex-col pt-24 pb-10 px-6 overflow-y-auto h-screen"
          >
            <div className="space-y-2 mb-8">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center justify-between w-full text-left text-xl font-bold text-white hover:text-[#9fcc2e] transition-colors py-4 border-b border-white/5 group"
                >
                  {item.label}
                  <ChevronRight className="text-[#9fcc2e] opacity-0 group-hover:opacity-100" />
                </motion.button>
              ))}
            </div>

            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-4 mt-auto" // mt-auto pushes this to bottom if space permits
            >
              <p className="text-gray-400 text-sm mb-4 font-medium uppercase tracking-wider text-center">Uygulamayı İndir</p>
              
              <motion.button 
                whileTap={{ scale: 0.98 }}
                onClick={handleAppStoreClick} 
                className="flex items-center gap-4 w-full bg-[#9fcc2e] text-white py-4 px-6 rounded-2xl font-bold transition-all active:scale-95 shadow-[0_0_20px_rgba(159,204,46,0.3)] hover:bg-[#8eb629]"
              >
                <FaApple size={24} /> 
                <div className="text-left">
                  <div className="text-xs opacity-80 uppercase tracking-wide">Download on</div>
                  <div className="text-lg leading-none">App Store</div>
                </div>
              </motion.button>
              
              <motion.button 
                whileTap={{ scale: 0.98 }}
                onClick={handlePlayStoreClick} 
                className="flex items-center gap-4 w-full bg-[#9fcc2e] text-white py-4 px-6 rounded-2xl font-bold transition-all active:scale-95 shadow-[0_0_20px_rgba(159,204,46,0.3)] hover:bg-[#8eb629]"
              >
                <FaGooglePlay size={22} /> 
                <div className="text-left">
                  <div className="text-xs opacity-80 uppercase tracking-wide">Get it on</div>
                  <div className="text-lg leading-none">Google Play</div>
                </div>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
