"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingScreen({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-zinc-950 text-white"
            
            // PARENT: BACKGROUND FADE OUT
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0, 
              transition: { 
                duration: 0.8, 
                ease: "easeInOut",
                delay: 0.2 // Logo ke upar jane ka thoda wait karega phir fade hoga
              } 
            }}
          >
            {/* CONTENT: MOVE UP & FADE OUT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              // EXIT ANIMATION: Logo goes to TOP and Fades
              exit={{ 
                opacity: 0, 
                y: -150, // Upar ki taraf move karega
                scale: 0.9, 
                transition: { duration: 0.6, ease: "backIn" } 
              }}
              className="relative z-10 flex flex-col items-center gap-6"
            >
              
              {/* Glow Effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#9fcc2e]/20 rounded-full blur-[100px] animate-pulse -z-10" />

              {/* Logo Container */}
              <div className="relative w-24 h-24 flex items-center justify-center">
                {/* Spinning Rings */}
                <div className="absolute inset-0 border-4 border-t-[#9fcc2e] border-r-transparent border-b-zinc-800 border-l-transparent rounded-full animate-spin" />
                <div className="absolute inset-2 border-2 border-t-transparent border-r-zinc-700 border-b-[#9fcc2e]/50 border-l-transparent rounded-full animate-spin [animation-direction:reverse]" />

                {/* Static Logo */}
                <div className="relative w-12 h-12">
                  <Image
                    src="/bajar-logo.png"
                    alt="Loading..."
                    fill
                    className="object-contain drop-shadow-[0_0_15px_rgba(159,204,46,0.3)]"
                    priority
                  />
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col items-center gap-2">
                <span className="text-2xl font-bold tracking-[0.2em] text-white">
                  BAJAR
                </span>
                <span className="text-xs text-[#9fcc2e] font-medium tracking-wide uppercase animate-pulse">
                  Yükleniyor...
                </span>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </>
  )
}