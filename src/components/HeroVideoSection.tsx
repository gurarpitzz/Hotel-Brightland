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
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;

    const initPlayer = () => {
      if (!isMounted || playerRef.current || !window.YT) return;
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
          mute: 1,
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
              if (isMounted) setIsVideoPlaying(true);
            }
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.playVideo();
            }
          },
        },
      });
    };

    // Defer loading YouTube IFrame API asynchronously to prioritize page rendering & LCP poster
    const loadYouTubeApi = () => {
      if (!window.YT) {
        window.onYouTubeIframeAPIReady = () => {
          initPlayer();
        };
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        tag.async = true;
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
      } else {
        initPlayer();
      }
    };

    // Defer execution using setTimeout/requestIdleCallback so initial HTML & poster render without blockage
    const timer = setTimeout(loadYouTubeApi, 100);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

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
    const timer = setTimeout(() => {
      setShowContent(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col">
      <section 
        ref={containerRef}
        onClick={handleContainerClick}
        className="relative min-h-[75vh] sm:min-h-screen w-full bg-black overflow-hidden select-none"
      >
        {/* Responsive Video Container - Absolute fill cover */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="relative w-full h-full pointer-events-none select-none">
            <div
              id="hero-yt-player"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full pointer-events-none select-none"
              style={{ pointerEvents: "none" }}
            />
          </div>
        </div>

        {/* Lightweight Poster image displayed until video reaches PLAYING state */}
        <div 
          className={`absolute inset-0 bg-cover bg-center z-10 transition-opacity duration-1000 ${
            isVideoPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          style={{ backgroundImage: "url('/assets/Hotel building/Hotel building (5).jpg')" }}
        >
          {/* Green Gradient Tint Overlay on Poster Image - Fades away smoothly as soon as video plays */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-green-950/80 via-brand-green-900/50 to-brand-green-950/40" />
        </div>

        {/* Full-width transparent interactive overlay receiving all pointer clicks */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-auto" />

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
            className="bg-black/60 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-md border border-white/20 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer"
          >
            {isMuted ? (
              <VolumeX className="w-6 h-6 text-red-400" />
            ) : (
              <Volume2 className="w-6 h-6 text-brand-yellow-400 animate-pulse" />
            )}
          </button>
        </div>

        {/* Hero Content Overlay */}
        <motion.div 
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
          transition={{ duration: 1 }}
          style={{ display: showContent ? "flex" : "none" }}
          className="relative z-30 inset-0 flex-col justify-end pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-36 pointer-events-auto"
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
      <section className="bg-brand-green-900 py-6 border-t-2 border-[#f7f3d7]/40 border-b border-[#c9a227]/30 relative z-20 text-brand-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {trustIndicators.map((indicator, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-2.5"
              >
                <div className="w-2 h-2 rounded-full bg-[#c9a227]" />
                <span className="text-brand-yellow-100 font-medium text-sm md:text-base tracking-wide">{indicator}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
