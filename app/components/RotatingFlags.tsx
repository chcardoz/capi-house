import React, { useState, useEffect } from 'react';

interface Flag {
  id: number;
  emoji: string;
  position: number;
}

interface FlagColumnProps {
  direction: 'up' | 'down';
}

const FlagColumn: React.FC<FlagColumnProps> = ({ direction = 'up' }) => {
  const [flags, setFlags] = useState<Flag[]>([]);
  
  const generateFlag = (): Flag => {
    const flagEmojis = ["🇮🇳", "🇨🇳", "🇧🇷", "🇲🇽", "🇳🇬", "🇵🇰", "🇻🇳", "🇰🇷", "🇯🇵", "🇵🇭", "🇮🇷", "🇹🇷", "🇪🇬", "🇨🇴", "🇦🇷"];
    return {
      id: Math.random(),
      emoji: flagEmojis[Math.floor(Math.random() * flagEmojis.length)],
      position: direction === 'up' ? 120 : -20 // Start outside viewport
    };
  };

  useEffect(() => {
    // Generate new flags at regular intervals
    const interval = setInterval(() => {
      setFlags((prev: Flag[]) => {
        // Remove flags that have gone off screen
        const filtered = prev.filter(flag => 
          direction === 'up' ? flag.position > -30 : flag.position < 130
        );
        
        // Add new flag if we have less than 10 flags
        if (filtered.length < 100) {
          return [...filtered, generateFlag()];
        }
        return filtered;
      });
    }, 1000);

    // Constant speed animation
    const animationFrame = setInterval(() => {
      setFlags((prev: Flag[]) => prev.map(flag => ({
        ...flag,
        position: flag.position + (direction === 'up' ? -1.5 : 1.5)
      })));
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(animationFrame);
    };
  }, [direction]);

  return (
    <div className="relative h-full w-20">
      {flags.map(flag => (
        <div
          key={flag.id}
          className="absolute text-9xl transform transition-all duration-300 hover:scale-125"
          style={{
            top: `${flag.position}%`,
            opacity: Math.min(1, Math.max(0, (1 - Math.abs(flag.position - 50) / 80)))
          }}
        >
          {flag.emoji}
        </div>
      ))}
    </div>
  );
};

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left side with flag columns */}
      <div className="w-1/2 bg-black flex justify-center items-center gap-16">
        <FlagColumn direction="up" />
        <FlagColumn direction="down" />
        <FlagColumn direction="up" />
      </div>

      {/* Dividing line */}
      <div className="w-px bg-blue-400/30 h-full" />

      {/* Right side with text */}
      <div className="w-1/2 bg-gradient-to-br from-blue-950 to-black flex flex-col justify-end p-12">
        <div>
          <h1 className="font-serif text-9xl font-bold text-white mb-8 tracking-tight">
            CAPI
          </h1>
          <p className="font-sans text-2xl text-blue-200 max-w-md leading-relaxed tracking-wide">
            A home for immigrant founders 
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;