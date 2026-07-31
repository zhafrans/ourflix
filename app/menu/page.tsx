"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Gamepad2, Lock } from "lucide-react";

export default function MenuPage() {
  const games = [
    {
      id: "flappy",
      title: "Flappy Chibi",
       description: "Join Caca and Japjap on a cute flappy adventure! Fly together, dodge the pipes, and see how far you can go!",
      image: "/img/chibi/flappychibi.png",
      link: "/minigames/flappy",
      available: true
    },
    {
      id: "coming-soon-1",
      title: "Coming Soon",
      description: "More mini-games are on the way...",
      image: null,
      link: "#",
      available: false
    },
    {
      id: "coming-soon-2",
      title: "Coming Soon",
      description: "More mini-games are on the way...",
      image: null,
      link: "#",
      available: false
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12 font-sans selection:bg-red-500/30">
      <Link href="/?view=hero" className="inline-flex items-center gap-2 hover:text-gray-300 transition-colors mb-8 text-lg font-medium">
        <ArrowLeft className="w-5 h-5" /> Back to Home
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-black mb-4">More Fun Menu</h1>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl">
          Choose a mini-game to play! We'll be adding more fun activities here over time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {game.available ? (
                <Link href={game.link}>
                  <div className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 p-6 hover:border-gray-600 transition-all hover:shadow-2xl hover:shadow-red-500/10 h-full flex flex-col items-center text-center">
                    <div className="w-full h-40 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {game.image ? (
                        <img src={game.image} alt={game.title} className="w-full h-full object-contain drop-shadow-xl" />
                      ) : (
                        <Gamepad2 className="w-16 h-16 text-gray-500" />
                      )}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{game.title}</h3>
                    <p className="text-gray-400">{game.description}</p>
                    <div className="mt-6 px-6 py-2 bg-white text-black font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0">
                      Play Now
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="relative overflow-hidden rounded-2xl bg-gray-900/50 border border-gray-800/50 p-6 h-full flex flex-col items-center text-center opacity-60">
                  <div className="w-24 h-24 bg-gray-800/50 rounded-full mb-6 flex items-center justify-center">
                    <Lock className="w-10 h-10 text-gray-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{game.title}</h3>
                  <p className="text-gray-500">{game.description}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
