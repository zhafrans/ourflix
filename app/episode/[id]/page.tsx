import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// Dummy blog data
const EPISODE_DETAILS: Record<string, any> = {
  "1": {
    title: "The First Glance",
    image: "/img/the_first_glance/thumbnail/thefirstglancethumb.jpeg",
    content: [
    "It started as an ordinary day, or at least that's what we thought. The city was busy, people were everywhere, and neither of us expected that one simple glance would quietly change everything. When our eyes met for the first time, it felt like time slowed down, even if only for a second.",
    "We were both pretending to be normal, but deep down, we couldn't stop noticing each other. Maybe it was just curiosity... or maybe we already knew there was something special waiting to happen. Of course, our pride wouldn't let us admit it back then.",
    "Later that day, we grabbed a bowl of bakso near DP Mall. It wasn't anything fancy, but somehow it became one of those moments that would stay in our memories forever. After finishing our meal, we decided, 'Why not take a walk around DP Mall?' So we wandered around with no real destination, just enjoying each other's company.",
    "Somewhere along the way, we bought cups of juice and ended up sitting by that ridiculously addictive fountain. We spent who-knows-how-long just staring at the water, talking about random things, laughing at nothing, and enjoying the comfortable silence in between. Looking back... remember that fountain? Hahaha. It wasn't the fountain that made it special—it was who I was with.",
    "That first glance wasn't just a coincidence. It quietly became the beginning of our story. Neither of us said it out loud, but maybe, from that very day, our hearts had already made the decision before we ever did."
  ],
    inlineImage: "/img/the_first_glance/content/airmancur.jpeg"
  },
  "2": {
    title: "Our Second Date",
    image: "/img/our_second_date/thumbnail/ourseconddatethumb.jpeg",
    content: [
    "Our second date felt much less intimidating than the first. We decided to grab coffee at Fore Coffee in Anjasmoro, and before we knew it, the conversation flowed so naturally. We talked about little things, shared random stories, laughed at the silliest moments, and somehow, hours passed without either of us noticing.",
    "After our coffee, we headed to Marina Beach. The sea breeze, the sound of the waves, and the beautiful afternoon sky made everything feel calm. We sat together with our drinks, enjoying the view and each other's company. It was one of those moments where doing absolutely nothing somehow meant everything.",
    "Of course, we couldn't resist the children's playground. We ended up playing on the swings like two kids who had completely forgotten how old we were. Then someone walked by and jokingly shouted, 'Come on, you're already grown up! Why are you still playing on the swings?' We couldn't stop laughing—it only made the moment even more unforgettable.",
    "We stayed there until the evening, watching the sky slowly change colors as the sun disappeared. It was the kind of sunset that makes you wish time would slow down just a little more.",
    "To end the perfect day, we went to your favorite fried duck restaurant in Indraprasta. Good food, endless conversations, and another beautiful memory added to our story. Looking back now, I realize it was never really about the places we visited—it was always about who I was sharing them with."
  ],
    inlineImage: "/img/our_second_date/content/marina.png"
  },
  "3": {
  title: "The Ghosting Era",
  image: "/img/the_ghosting_era/thumbnail/ghosting.jpeg",
  content: [
    "There was a time when I genuinely thought our story had already ended before it even had the chance to begin. As you returned to your life in Jatinangor, I started convincing myself that maybe I just wasn't your type. Maybe I had misunderstood everything from the very beginning.",
    "Our conversations slowly faded with time. The long chats disappeared, replaced by the occasional reply to an Instagram story or a random comment here and there. Every notification that wasn't from you felt ordinary, and every day without hearing from you made me wonder if I should simply move on.",
    "Then came the moment that completely ruined my mood. You uploaded a photo with another guy. The second I saw it, my heart dropped. I remember staring at my screen, thinking, 'Well... that's it.' And deep inside, the only thing running through my head was, 'Damn it...' 😂",
    "Looking back now, it's actually hilarious. I had absolutely no idea who he was or what was really going on, yet my imagination had already written an entire tragic ending for our story. Meanwhile, you were probably just living your life, completely unaware of the unnecessary drama happening inside my head.",
    "Thankfully, life had different plans. What I thought was the end turned out to be just another chapter—one that we'd eventually laugh about together."
  ],
  inlineImage: "/img/the_ghosting_era/content/sschat.jpeg"
},
  "4": {
  title: "Back Like Nothing Happened",
  image: "/img/back_like_nothing_happened/thumbnail/curugthumb.jpeg",
  content: [
    "Somehow, after all that silence, we found our way back to each other... through TikTok story comments of all places. 😂 Who would've thought that a few random replies could slowly bring us back into each other's lives? Sometimes life has the funniest way of reconnecting two people.",
    "Eventually, we planned to meet at Antari Café. Sadly, we didn't take a single photo there—still one of our biggest regrets. But maybe that's what makes the memory special. It exists only in our minds, proof that not every beautiful moment needs a camera.",
    "Then, in the most spontaneous way possible, we decided to ride to Curug Sewu and Curug Telu. The road, the fresh air, the waterfalls, and the excitement of discovering new places together made the trip unforgettable. We took pictures, laughed at random things, and simply enjoyed every moment.",
    "That ride felt different. It wasn't just another trip—it felt like touring with someone who made every kilometer more enjoyable. Looking back, I think that was the day I realized... no matter how many times our story seemed to drift apart, it somehow always found its way back."
  ],
  inlineImage: "/img/back_like_nothing_happened/content/curugcontent.jpeg"
},
 "5": {
  title: "The Night I Fell Again",
  image: "/img/the_night_i_fell_again/thumbnail/mirror.jpeg",
  content: [
    "That day started with a simple plan: trying Djuara Kopi, the place everyone claimed served the best coffee in Semarang. As always, our conversations came so naturally. We talked about everything and nothing at the same time, sharing stories, laughing, and losing track of time without even realizing it.",
    "Instead of calling it a day, we made a spontaneous decision to keep the night going. We rode around Semarang together, letting the city lights guide us wherever they wanted. Our next stop was Threetales Café, where we shared food, fed each other, took countless selfies, and laughed over the smallest things. It felt so effortless, like we'd been doing this forever.",
    "The adventure didn't stop there. For the first time in my life, I got to wander around Kota Lama at midnight. The streets were quieter, the air felt different, and somehow everything became even more beautiful because you were there beside me. It wasn't just another late-night ride—it became one of my favorite memories.",
    "But what stayed with me the most wasn't the coffee, the cafés, or even the places we visited. It was you. The way you cared about me, checked on me without being asked, and showed so much genuine empathy. That side of you completely won me over, Ca. I don't think you realized how much those little actions meant to me.",
    "And then came the hug. In that moment, I felt something I hadn't felt in a long time—a sense of comfort. I remember thinking, 'So this is what it feels like to lean on someone again.' It was warm, safe, and strangely familiar. We went home that night still chatting away, feeling equally happy... and somehow still finding things to playfully tease each other about. 😂"
  ],
  inlineImage: "/img/the_night_i_fell_again/content/wlee.jpeg"
}
};

export default async function EpisodePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const episode = EPISODE_DETAILS[id];

  if (!episode) {
    return (
      <div className="min-h-screen bg-[#141414] text-white flex items-center justify-center">
        <h1 className="text-2xl">Episode not found</h1>
        <Link href="/" className="ml-4 text-red-500 hover:underline">Go back</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#141414] text-gray-200 font-sans pb-24 selection:bg-red-600 selection:text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-[#141414]/90 backdrop-blur-md p-6 border-b border-gray-800 flex items-center gap-4">
        <Link href="/?view=timeline" className="hover:text-gray-300 transition text-white">
          <ArrowLeft className="w-8 h-8" />
        </Link>
        <div className="text-red-600 font-black text-xl tracking-tighter">OURFLIX</div>
      </header>

      {/* Hero Image */}
      <div className="w-full h-[40vh] md:h-[60vh] relative">
        <img src={episode.image} alt={episode.title} className="w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/20 to-transparent" />
        
        <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full max-w-4xl mx-auto">
          <span className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2 block">Episode {id}</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">{episode.title}</h1>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto mt-12 px-6 text-lg md:text-xl leading-relaxed space-y-8">
        {episode.content.map((paragraph: string, index: number) => (
          <React.Fragment key={index}>
            <p className="text-gray-300">{paragraph}</p>
            {index === 0 && episode.inlineImage && (
              <div className="my-12 rounded-xl overflow-hidden shadow-2xl border border-gray-800">
                 <img src={episode.inlineImage} alt="Memory" className="w-full h-auto object-cover" />
              </div>
            )}
          </React.Fragment>
        ))}
      </article>

      {/* Footer */}
      <div className="max-w-3xl mx-auto mt-20 px-6 pb-12 flex justify-center">
         <Link href="/?view=timeline">
            <button className="bg-white text-black px-8 py-3 rounded flex items-center gap-2 font-bold hover:bg-white/80 transition shadow-lg">
               <ArrowLeft className="w-5 h-5" /> Back to Episodes
            </button>
         </Link>
      </div>
    </main>
  );
}
