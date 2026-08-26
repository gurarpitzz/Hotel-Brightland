"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useBooking } from "@/context/BookingContext";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Sparkles } from "lucide-react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function HeroVideoSection({
  trustIndicators,
}: {
  trustIndicators: string[];
}) {
  const { setIsCartOpen } = useBooking();
  const [isMuted, setIsMuted] = useState(false);
  const [isApiLoaded, setIsApiLoaded] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if YouTube IFrame API script is already added
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        setIsApiLoaded(true);
      };
    } else {
      setIsApiLoaded(true);
    }
  }, []);

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    if (isApiLoaded && !playerRef.current) {
      playerRef.current = new window.YT.Player("hero-yt-player", {
        videoId: "G9wqwz74kVY",
        playerVars: {
          autoplay: 1,
          controls: 0,
          loop: 1,
          playlist: "G9wqwz74kVY",
          modestbranding: 1,
          showinfo: 0,
          rel: 0,
          fs: 0,
          autohide: 1,
          mute: 1, // Mute on initial load to guarantee instant autoplay without browser block
          enablejsapi: 1,
          playsinline: 1,
          disablekb: 1,
          iv_load_policy: 3,
        },
        events: {
          onReady: (event: any) => {
            event.target.mute();
            event.target.playVideo();
            setIsMuted(true);
          },
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsVideoPlaying(true);
            }
            // Loop automatically when ended
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.playVideo();
            }
          },
        },
      });
    }
  }, [isApiLoaded]);

  const toggleMute = () => {
    setHasInteracted(true);
    if (playerRef.current) {
      if (isMuted) {
        playerRef.current.unMute();
        playerRef.current.setVolume(100);
        setIsMuted(false);
      } else {
        playerRef.current.mute();
        setIsMuted(true);
      }
    }
  };

  // User click anywhere on section attempts to enable audio if browser blocked sound
  const handleContainerClick = () => {
    if (!hasInteracted && isMuted && playerRef.current) {
      playerRef.current.unMute();
      playerRef.current.setVolume(100);
      setIsMuted(false);
      setHasInteracted(true);
    }
  };

  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    // Hide overlay text & CTA after 5 seconds
    const timer = setTimeout(() => {
      setShowContent(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col">
      <section 
        ref={containerRef}
        className="relative min-h-[75vh] sm:min-h-screen w-full bg-black overflow-hidden pointer-events-none"
      >
        {/* Fallback / Loading Poster Image until video starts playing */}
        <div 
          className={`absolute inset-0 bg-cover bg-center z-10 transition-opacity duration-1000 ${
            isVideoPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          style={{ backgroundImage: "url('/assets/Hotel building/Hotel building (5).jpg')" }}
        />

        {/* YouTube Background Embed with Aspect Ratio Scaling */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center z-0">
          <div className="relative w-[300vw] h-[300vh] sm:w-[180%] sm:h-[180%] lg:w-[125%] lg:h-[125%] min-w-full min-h-full flex items-center justify-center pointer-events-none select-none">
            <div
              id="hero-yt-player"
              className="w-[177.77vh] min-w-full h-[56.25vw] min-h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none select-none"
            />
          </div>
        </div>

        {/* Transparent Shield & Vignette Overlay to hide control icons and prevent hover states */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-transparent" />

        {/* Subtle Bottom Vignette Gradient (no green tint) for clear button visibility */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-1000 ${showContent ? "opacity-100" : "opacity-0"}`} />

        {/* Audio Mute / Unmute Floating Toggle */}
        <div className="absolute top-24 right-4 sm:right-8 z-30 flex items-center gap-2 pointer-events-auto">
          {isMuted && !hasInteracted && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.2 }}
              className="bg-brand-yellow-400 text-brand-green-950 text-xs font-extrabold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 backdrop-blur-sm"
            >
              <Sparkles size={14} /> Click anywhere for sound
            </motion.div>
          )}

          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleMute();
            }}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="bg-black/60 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-md border border-white/20 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center"
          >
            {isMuted ? (
              <VolumeX className="w-6 h-6 text-red-400" />
            ) : (
              <Volume2 className="w-6 h-6 text-brand-yellow-400 animate-pulse" />
            )}
          </button>
        </div>

        {/* Hero Content Overlay with 5s Auto-Fade */}
        <motion.div 
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
          transition={{ duration: 1 }}
          style={{ display: showContent ? "flex" : "none" }}
          className="relative z-20 inset-0 flex-col justify-end pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-36 pointer-events-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 shadow-sm leading-tight drop-shadow-md"
          >
            Experience the True <br className="hidden sm:block" />
            <span className="text-brand-yellow-100">Beauty of Shimla</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-200 max-w-2xl mb-8 leading-relaxed drop-shadow"
          >
            Enjoy premium comfort, breathtaking mountain views, and exceptional hospitality at Brightland Hotel. Just minutes away from Shimla's finest attractions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/rooms"
              onClick={(e) => e.stopPropagation()}
              className="bg-brand-green-700 hover:bg-brand-green-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Explore Rooms
            </Link>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsCartOpen(true);
              }}
              className="bg-white hover:bg-brand-yellow-50 text-brand-green-900 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Book Directly
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-brand-yellow-50 py-8 border-b border-brand-green-100 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {trustIndicators.map((indicator, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-2"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-brand-green-700" />
                <span className="text-brand-green-900 font-medium">{indicator}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
