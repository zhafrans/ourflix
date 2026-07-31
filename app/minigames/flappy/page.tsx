"use client";

import React, { useEffect, useState, useCallback } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const BIRD_SIZE = 120;
const GAME_WIDTH = 400;
const GAME_HEIGHT = 500;
const GRAVITY = 3;
const JUMP = -40;
const OBSTACLE_WIDTH = 60;
const OBSTACLE_SPEED = 5;
const PIPE_GAP = 150;

const CHARACTERS = [
  { id: "ca", name: "Caca", src: "/img/chibi/cachibi.png" },
  { id: "jap", name: "JapJap", src: "/img/chibi/japchibi.png" }
];

export default function FlappyChibi() {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);
  const [birdPos, setBirdPos] = useState(GAME_HEIGHT / 2);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [obstacleLeft, setObstacleLeft] = useState(GAME_WIDTH);
  const [obstacleHeight, setObstacleHeight] = useState(150);

  // Load highest score from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("flappyHighestScore");
    if (saved) setHighestScore(parseInt(saved, 10));
  }, []);

  // Update highest score
  useEffect(() => {
    if (score > highestScore) {
      setHighestScore(score);
      localStorage.setItem("flappyHighestScore", score.toString());
    }
  }, [score, highestScore]);

  const jump = useCallback(() => {
    if (!gameStarted && !gameOver) {
      setGameStarted(true);
    }
    if (gameOver) {
      // Reset game
      setBirdPos(GAME_HEIGHT / 2);
      setObstacleLeft(GAME_WIDTH);
      setScore(0);
      setGameOver(false);
      setGameStarted(true);
    } else {
      setBirdPos((pos) => Math.max(0, pos + JUMP));
    }
  }, [gameStarted, gameOver]);

  // Handle keyboard (Space)
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === "Space" && selectedCharacter) {
        e.preventDefault();
        jump();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [jump, selectedCharacter]);

  // Game loop
  useEffect(() => {
    let timeId: NodeJS.Timeout;
    if (gameStarted && !gameOver) {
      timeId = setInterval(() => {
        setBirdPos((pos) => {
          const newPos = pos + GRAVITY;
          const HITBOX_PADDING = 30;
          if (newPos + BIRD_SIZE - HITBOX_PADDING >= GAME_HEIGHT - 20) { // 20 is ground height
            setGameOver(true);
            return GAME_HEIGHT - 20 - BIRD_SIZE + HITBOX_PADDING;
          }
          return newPos;
        });
        
        setObstacleLeft((left) => {
          if (left <= -OBSTACLE_WIDTH) {
            setScore((s) => s + 1);
            setObstacleHeight(Math.random() * (GAME_HEIGHT - PIPE_GAP - 100) + 50);
            return GAME_WIDTH;
          }
          return left - OBSTACLE_SPEED;
        });
      }, 24);
    }
    return () => clearInterval(timeId);
  }, [gameStarted, gameOver]);

  // Collision detection
  useEffect(() => {
    const HITBOX_PADDING = 30;
    const birdLeft = 50 + HITBOX_PADDING; // Fixed horizontal position + padding
    const birdRight = 50 + BIRD_SIZE - HITBOX_PADDING;
    const pipeLeft = obstacleLeft;
    const pipeRight = obstacleLeft + OBSTACLE_WIDTH;

    const inHorizontalCollisionRange = birdRight >= pipeLeft && birdLeft <= pipeRight;
    
    if (inHorizontalCollisionRange) {
      const hitTopPipe = birdPos + HITBOX_PADDING <= obstacleHeight;
      const hitBottomPipe = birdPos + BIRD_SIZE - HITBOX_PADDING >= obstacleHeight + PIPE_GAP;

      if (hitTopPipe || hitBottomPipe) {
        setGameOver(true);
      }
    }
  }, [birdPos, obstacleHeight, obstacleLeft]);

  if (!selectedCharacter) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-[600px]">
          <Link href="/menu" className="text-white flex items-center gap-2 hover:text-gray-300 transition mb-8 w-fit">
            <ArrowLeft /> Back to Menu
          </Link>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Choose Your Chibi!</h1>
            <p className="text-gray-400">Select a character to play Flappy Chibi.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CHARACTERS.map((char) => (
              <button
                key={char.id}
                onClick={() => setSelectedCharacter(char.src)}
                className="bg-gray-900 border border-gray-800 hover:border-white/50 p-6 rounded-2xl transition-all hover:scale-105 active:scale-95 group flex flex-col items-center"
              >
                <div className="w-32 h-32 relative mb-4 bg-gray-800 rounded-full flex items-center justify-center overflow-hidden p-2 group-hover:bg-gray-700 transition-colors">
                  <img src={char.src} alt={char.name} className="w-full h-full object-contain drop-shadow-xl" />
                </div>
                <h3 className="text-xl font-bold text-white">{char.name}</h3>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      {/* Header */}
      <div className="w-full max-w-[400px] flex justify-between items-center mb-4">
        <button 
          onClick={() => {
            setSelectedCharacter(null);
            setGameStarted(false);
            setGameOver(false);
            setScore(0);
            setBirdPos(GAME_HEIGHT / 2);
            setObstacleLeft(GAME_WIDTH);
          }} 
          className="text-white flex items-center gap-2 hover:text-gray-300 transition"
        >
          <ArrowLeft /> Change Character
        </button>
        <div className="text-white font-bold bg-white/10 px-4 py-2 rounded-full border border-white/20">
          High Score: {highestScore}
        </div>
      </div>

      {/* Game Container */}
      <div 
        className="relative bg-sky-300 overflow-hidden rounded-xl shadow-2xl cursor-pointer ring-4 ring-white/20 select-none"
        style={{ width: GAME_WIDTH, height: GAME_HEIGHT }}
        onClick={jump}
      >
        {/* Score */}
        <div className="absolute top-8 left-0 w-full text-center text-5xl font-black text-white z-10" style={{ textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000' }}>
          {score}
        </div>

        {/* Chibi Avatar (Bird) */}
        <div 
          className="absolute transition-transform duration-75"
          style={{
            width: BIRD_SIZE,
            height: BIRD_SIZE,
            top: birdPos,
            left: 50, // Fixed horizontal position
            transform: `rotate(${gameStarted ? (birdPos > GAME_HEIGHT/2 ? 15 : -15) : 0}deg)`
          }}
        >
          <img 
            src={selectedCharacter}
            alt="Chibi Bird"
            className="w-full h-full object-contain drop-shadow-lg pointer-events-none"
          />
        </div>

        {/* Top Pipe */}
        <div 
          className="absolute bg-green-500 border-4 border-green-800"
          style={{
            top: 0,
            width: OBSTACLE_WIDTH,
            height: obstacleHeight,
            left: obstacleLeft
          }}
        >
            <div className="absolute bottom-0 w-[calc(100%+8px)] h-8 bg-green-500 border-4 border-green-800 -left-1" />
        </div>

        {/* Bottom Pipe */}
        <div 
          className="absolute bg-green-500 border-4 border-green-800"
          style={{
            top: obstacleHeight + PIPE_GAP,
            width: OBSTACLE_WIDTH,
            height: GAME_HEIGHT - (obstacleHeight + PIPE_GAP),
            left: obstacleLeft
          }}
        >
            <div className="absolute top-0 w-[calc(100%+8px)] h-8 bg-green-500 border-4 border-green-800 -left-1" />
        </div>

        {/* Ground */}
        <div className="absolute bottom-0 w-full h-[20px] bg-[#dfc699] border-t-4 border-[#73bf2e]" style={{ backgroundSize: '20px 20px', backgroundImage: 'linear-gradient(45deg, #d3b98c 25%, transparent 25%, transparent 75%, #d3b98c 75%, #d3b98c), linear-gradient(45deg, #d3b98c 25%, transparent 25%, transparent 75%, #d3b98c 75%, #d3b98c)' }} />

        {/* Start / Game Over Overlay */}
        {(!gameStarted || gameOver) && (
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white z-20 backdrop-blur-sm">
            {gameOver ? (
              <div className="bg-white/10 p-8 rounded-2xl border border-white/20 text-center flex flex-col items-center">
                <h2 className="text-4xl font-black mb-2 text-red-400 drop-shadow-md">GAME OVER</h2>
                <p className="mb-6 text-xl font-medium">Score: {score}</p>
                <button 
                  className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all shadow-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    jump();
                  }}
                >
                  PLAY AGAIN
                </button>
              </div>
            ) : (
              <div className="text-center animate-pulse flex flex-col items-center">
                <h2 className="text-4xl font-black mb-4 drop-shadow-lg">Flappy Chibi</h2>
                <div className="bg-white/20 px-6 py-2 rounded-full border border-white/30 backdrop-blur-md">
                    <p className="text-lg font-bold">Click or Space to Jump</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
