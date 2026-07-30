"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Info, ArrowLeft, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type ViewState = "splash" | "profiles" | "hero" | "timeline";

const PROFILES = [
  {
    id: "her",
    name: "Her",
    image: "/img/her_us/her.jpeg",
  },
  {
    id: "us",
    name: "Us",
    image: "/img/her_us/us.jpeg",
  },
];

const EPISODES = [
  {
    title: "The First Glance",
    date: "Chapter 1",
    description: "It all started on a day like any other. Little did we know, our lives were about to change forever when our paths finally crossed.",
    duration: "1h 45m",
    image: "/img/the_first_glance/thumbnail/thefirstglancethumb.jpeg",
  },
  {
    title: "Our Second Date",
    date: "Chapter 2",
    description: "Nervous laughs, endless conversations, and a feeling that this was the start of something beautiful. Time just flew by.",
    duration: "3h 20m",
    image: "/img/our_second_date/thumbnail/ourseconddatethumb.jpeg",
  },
  {
    title: "The Ghosting Era",
    date: "Chapter 3",
    description: "When our conversations faded, doubts took over, and one Instagram post almost convinced me our story was over.",
    duration: "12month",
    image: "/img/the_ghosting_era/thumbnail/ghosting.jpeg",
  },
  {
    title: "Back Like Nothing Happened",
    date: "Chapter 4",
    description: "A few TikTok comments somehow brought us back together, leading to one unforgettable spontaneous adventure.",
    duration: "6h 15m",
    image: "/img/back_like_nothing_happened/thumbnail/curugthumb.jpeg",
  },
  {
    title: "The Night I Fell Again",
    date: "Chapter 5",
    description: "A cup of coffee, a midnight ride, and one hug that quietly changed everything.",
    duration: "8h 40m",
    image: "/img/the_night_i_fell_again/thumbnail/mirror.jpeg",
  },
];

export default function NetflixLoveStory() {
  return (
    <React.Suspense fallback={<div className="min-h-screen bg-[#141414]" />}>
      <NetflixLoveStoryContent />
    </React.Suspense>
  );
}

function NetflixLoveStoryContent() {
  const searchParams = useSearchParams();
  const initialView = (searchParams.get("view") as ViewState) || "splash";
  const [view, setView] = useState<ViewState>(initialView);
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);

  useEffect(() => {
    if (view === "splash") {
      const timer = setTimeout(() => {
        setView("profiles");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [view]);

  const handleProfileSelect = (id: string) => {
    setSelectedProfile(id);
    setView("hero");
  };

  return (
    <main className="min-h-screen bg-[#141414] text-white font-sans selection:bg-red-600 selection:text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        {view === "splash" && (
          <motion.div
            key="splash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center min-h-screen bg-black"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-red-600 font-black text-5xl md:text-7xl lg:text-9xl tracking-tighter"
            >
              <motion.span
                initial={{ letterSpacing: "0px" }}
                animate={{ letterSpacing: "8px" }}
                transition={{ duration: 3, ease: "easeOut" }}
              >
                OURFLIX
              </motion.span>
            </motion.div>
          </motion.div>
        )}

        {view === "profiles" && (
          <motion.div
            key="profiles"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center min-h-screen p-6"
          >
            <h1 className="text-3xl md:text-5xl font-medium mb-12 text-center text-white">
              Who's Watching?
            </h1>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {PROFILES.map((profile) => (
                <motion.div
                  key={profile.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex flex-col items-center cursor-pointer"
                  onClick={() => handleProfileSelect(profile.id)}
                >
                  <div className="w-32 h-32 md:w-44 md:h-44 rounded-md overflow-hidden border-4 border-transparent group-hover:border-white transition-colors duration-300 relative">
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="mt-4 text-gray-400 group-hover:text-white transition-colors text-lg md:text-xl">
                    {profile.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {view === "hero" && (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-screen flex flex-col"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0 h-[80vh] md:h-screen">
              <img
                src="/img/our_story/our_story.jpeg"
                alt="Background"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/20 to-transparent" />
            </div>

            {/* Navbar */}
            <header className="relative z-10 flex items-center justify-between p-6 md:px-12 md:py-8">
              <div className="text-red-600 font-black text-2xl md:text-4xl tracking-tighter">
                OURFLIX
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-sm overflow-hidden border border-transparent cursor-pointer">
                  <img
                    src={
                      PROFILES.find((p) => p.id === selectedProfile)?.image ||
                      PROFILES[0].image
                    }
                    alt="Current Profile"
                    className="w-full h-full object-cover"
                    onClick={() => setView("profiles")}
                  />
                </div>
              </div>
            </header>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col justify-end flex-1 p-6 md:p-12 pb-24 md:w-2/3 lg:w-1/2">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-xl text-white">
                  Our Awkward Story
                </h1>
                <div className="flex items-center gap-4 text-sm md:text-base text-gray-300 mb-6 font-semibold drop-shadow-md">
                  <span className="text-green-500">99% Match</span>
                  <span>2025</span>
                  <span className="border border-gray-400 px-1 rounded text-xs">TV-MA</span>
                  <span>2 Seasons</span>
                </div>
                <p className="text-base md:text-lg text-gray-200 mb-8 drop-shadow-lg max-w-xl line-clamp-3 md:line-clamp-none">
                  100% feelings. 0% confession. An award-winning series about two people waiting for the other to make the first move.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => setView("timeline")}
                    className="bg-white text-black px-6 py-2 md:px-8 md:py-3 rounded flex items-center gap-2 font-bold hover:bg-white/80 transition shadow-lg"
                  >
                    <Play className="w-6 h-6 md:w-8 md:h-8 fill-black" /> Play
                  </button>
                  <button className="bg-gray-500/60 text-white px-6 py-2 md:px-8 md:py-3 rounded flex items-center gap-2 font-bold hover:bg-gray-500/80 transition backdrop-blur-sm shadow-lg">
                    <Info className="w-6 h-6 md:w-8 md:h-8" /> More Info
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {view === "timeline" && (
          <motion.div
            key="timeline"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen bg-[#141414] pb-24"
          >
            <header className="sticky top-0 z-50 bg-[#141414]/90 backdrop-blur-md p-6 border-b border-gray-800 flex items-center gap-4">
              <button
                onClick={() => setView("hero")}
                className="hover:text-gray-300 transition"
              >
                <ArrowLeft className="w-8 h-8" />
              </button>
              <h2 className="text-2xl font-bold">Our Awkward Story</h2>
            </header>

            <div className="max-w-4xl mx-auto mt-12 px-6">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl md:text-3xl font-semibold">Episodes</h3>
                <span className="text-gray-400 font-medium">Limited Series</span>
              </div>

              <div className="flex flex-col gap-6">
                {EPISODES.map((episode, index) => (
                  <Link href={`/episode/${index + 1}`} key={index} className="block">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex flex-col md:flex-row gap-4 md:gap-6 group hover:bg-[#2f2f2f] p-4 rounded-lg transition-colors cursor-pointer border-b border-gray-800 md:border-none"
                  >
                    <div className="flex items-center gap-4 md:gap-6">
                      <div className="text-2xl md:text-3xl font-bold text-gray-500 group-hover:text-white w-8 text-center">
                        {index + 1}
                      </div>
                      <div className="relative w-32 h-20 md:w-48 md:h-28 flex-shrink-0 rounded overflow-hidden">
                        <img
                          src={episode.image}
                          alt={episode.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                           <div className="bg-black/50 rounded-full p-2 border border-white">
                              <Play className="w-6 h-6 fill-white" />
                           </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-lg md:text-xl font-medium group-hover:text-white text-gray-200">
                          {episode.title}
                        </h4>
                        <span className="text-gray-400 text-sm hidden md:block">
                          {episode.duration}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 line-clamp-3">
                        {episode.description}
                      </p>
                    </div>
                  </motion.div>
                  </Link>
                ))}

                {/* "What's Next" Episode (Locked) */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex flex-col md:flex-row gap-4 md:gap-6 p-4 rounded-lg border-b border-gray-800 md:border-none opacity-60 grayscale cursor-not-allowed"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="text-2xl md:text-3xl font-bold text-gray-600 w-8 text-center">
                      6
                    </div>
                    <div className="relative w-32 h-20 md:w-48 md:h-28 flex-shrink-0 rounded overflow-hidden bg-gray-900 border border-gray-800">
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Lock className="w-8 h-8 md:w-10 md:h-10 text-gray-500" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-lg md:text-xl font-medium text-gray-400">
                        What's Next?
                      </h4>
                      <span className="text-gray-500 text-xs md:text-sm hidden md:block uppercase tracking-wider font-semibold">
                        Coming Soon
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 line-clamp-3 md:line-clamp-none">
                      What happens in the next chapter? The upcoming episodes are still being written... and trust me, waiting for this is way more thrilling than waiting for a real Netflix series release date! 🍿
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
