import { useEffect, useRef, useState, useCallback } from "react"

interface FooterTextGlitchProps {
  text: string
  hoverText?: string
  href?: string
  className?: string
  delay?: number
  enableAutoGlitch?: boolean
  autoGlitchInterval?: number
  size?: "sm" | "md" | "lg" | "xl"
}

export function FooterTextGlitch({ 
  text, 
  hoverText, 
  href, 
  className = "", 
  delay = 0,
  enableAutoGlitch = false,
  autoGlitchInterval = 5000,
  size = "sm"
}: FooterTextGlitchProps) {
  const textRef = useRef<HTMLSpanElement>(null)
  const spanRef = useRef<HTMLSpanElement>(null)
  const [displayHoverText, setDisplayHoverText] = useState(hoverText || text)
  const hoverIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const autoGlitchTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  // Size configurations
  const sizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-2xl md:text-3xl",
    xl: "text-3xl md:text-4xl lg:text-5xl"
  }

  // Color options - change the backgroundColor value below to any of these:
  // Cyan: "#00D9FF" (recommended - modern, techy)
  // Neon Green: "#00FF88" (energetic)
  // Electric Blue: "#0080FF" (professional)
  // Transparent with backdrop: "rgba(255, 255, 255, 0.15)" with backdrop-filter
  const glitchColor = "#00D9FF" // Change this to customize!

  // GSAP Animation on mount
  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap")

      if (textRef.current) {
        gsap.set(textRef.current, {
          backgroundSize: "0%",
          opacity: 0.7,
        })

        const tl = gsap.timeline({ delay: delay })

        tl.to(textRef.current, {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        }).to(
          textRef.current,
          {
            backgroundSize: "100%",
            duration: 1.5,
            ease: "power2.out",
          },
          "-=0.3",
        )
      }
    }

    loadGSAP()
  }, [delay])

  // Glitch animation functions using useCallback
  const triggerGlitch = useCallback(() => {
    if (hoverText) {
      let iteration = 0

      if (hoverIntervalRef.current) {
        clearInterval(hoverIntervalRef.current)
      }

      hoverIntervalRef.current = setInterval(() => {
        setDisplayHoverText(
          hoverText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return hoverText[index]
              }
              return letters[Math.floor(Math.random() * 26)]
            })
            .join(""),
        )

        if (iteration >= hoverText.length) {
          clearInterval(hoverIntervalRef.current!)
        }

        iteration += 1 / 3
      }, 30)
    }

    if (spanRef.current) {
      spanRef.current.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
    }
  }, [hoverText, letters])

  const resetGlitch = useCallback(() => {
    if (hoverIntervalRef.current) {
      clearInterval(hoverIntervalRef.current)
    }
    setDisplayHoverText(hoverText || text)

    if (spanRef.current) {
      spanRef.current.style.clipPath = "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)"
    }
  }, [hoverText, text])

  const handleMouseEnter = () => {
    triggerGlitch()
  }

  const handleMouseLeave = () => {
    resetGlitch()
  }

  // Auto-glitch effect
  useEffect(() => {
    if (enableAutoGlitch) {
      const scheduleAutoGlitch = () => {
        autoGlitchTimeoutRef.current = setTimeout(() => {
          triggerGlitch()
          setTimeout(() => {
            resetGlitch()
            scheduleAutoGlitch()
          }, 1500)
        }, autoGlitchInterval)
      }

      scheduleAutoGlitch()
    }

    return () => {
      if (autoGlitchTimeoutRef.current) {
        clearTimeout(autoGlitchTimeoutRef.current)
      }
    }
  }, [enableAutoGlitch, autoGlitchInterval, triggerGlitch, resetGlitch])

  // Cleanup
  useEffect(() => {
    return () => {
      if (hoverIntervalRef.current) {
        clearInterval(hoverIntervalRef.current)
      }
      if (autoGlitchTimeoutRef.current) {
        clearTimeout(autoGlitchTimeoutRef.current)
      }
    }
  }, [])

  const content = (
    <span
      ref={textRef}
      className={`
        ${sizeClasses[size]} font-medium
        text-primary-foreground/70
        bg-gradient-to-r from-primary-foreground/90 to-accent bg-clip-text bg-no-repeat
        inline-block relative
        transition-all duration-300 ease-out
        cursor-pointer
        hover:scale-105
        ${className}
      `}
      style={{
        backgroundSize: "0%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        lineHeight: "1.2",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
      <span
        ref={spanRef}
        className={`
          absolute top-0 left-0 
          text-black font-medium ${sizeClasses[size]}
          flex items-center justify-center
          transition-all duration-300 ease-out
          pointer-events-none
          whitespace-nowrap
          px-2
        `}
        style={{
          clipPath: "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)",
          backgroundColor: glitchColor,
          minWidth: "100%",
          height: "100%",
          lineHeight: "1.2",
        }}
      >
        {displayHoverText}
      </span>
    </span>
  )

  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="no-underline">
      {content}
    </a>
  ) : (
    content
  )
}