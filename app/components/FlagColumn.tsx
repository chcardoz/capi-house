import React, { useState, useEffect, useRef } from 'react';
import Twemoji from 'react-twemoji';

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
  const [isVisible, setIsVisible] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  const GENERATION_INTERVAL = 2000; // Flag every 2 seconds

  const generateFlag = (): Flag => {
    const flagEmojis = ["🇮🇳", "🇨🇳", "🇧🇷", "🇲🇽", "🇳🇬", "🇵🇰", "🇻🇳", "🇰🇷", "🇯🇵", "🇵🇭", "🇮🇷", "🇹🇷", "🇪🇬", "🇨🇴", "🇦🇷"];
    return {
      id: Math.random(),
      emoji: flagEmojis[Math.floor(Math.random() * flagEmojis.length)],
      position: direction === 'up' ? 110 : -10 // Start even closer to the viewport
    };
  };

  const startFlagGeneration = () => {
    if (intervalRef.current) return; // Prevent multiple intervals
    intervalRef.current = setInterval(() => {
      setFlags((prev: Flag[]) => {
        const filtered = prev.filter(flag =>
          direction === 'up' ? flag.position > -10 : flag.position < 110
        );
        return filtered.length < 50 ? [...filtered, generateFlag()] : filtered;
      });
    }, GENERATION_INTERVAL);
  };

  const stopFlagGeneration = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(document.visibilityState === 'visible');
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      startFlagGeneration();
      animationRef.current = setInterval(() => {
        setFlags((prev: Flag[]) => prev.map(flag => ({
          ...flag,
          position: flag.position + (direction === 'up' ? -0.5 : 0.5)
        })));
      }, 50);
    } else {
      stopFlagGeneration();
      if (animationRef.current) {
        clearInterval(animationRef.current);
        animationRef.current = null;
      }
    }
    return () => {
      stopFlagGeneration();
      if (animationRef.current) clearInterval(animationRef.current);
    };
  }, [isVisible, direction]);

  return (
    <div className="relative h-full w-20">
      {flags.map(flag => (
        <div
          key={flag.id}
          className="absolute transform transition-all duration-300 hover:scale-125"
          style={{
            top: `${flag.position}%`,
            opacity: Math.min(0.7, Math.max(0, (0.6 - Math.abs(flag.position - 50) / 80)))
          }}
        >
          <div className="lg:scale-[2] md:scale-[2.75] scale-[1.5]">
            <Twemoji>{flag.emoji}</Twemoji>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlagColumn;