import { useState, useRef, useLayoutEffect } from 'react';

const useAnimatedNumber = (endValue: number, duration: number = 1000): number => {
  const [displayValue, setDisplayValue] = useState<number>(0);
  const frameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const animate = (timestamp: number): void => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const progress = (timestamp - startTimeRef.current) / duration;

    if (progress < 1) {
      setDisplayValue(Math.floor(endValue * progress));
      frameRef.current = requestAnimationFrame(animate);
    } else {
      setDisplayValue(endValue);
    }
  };

  useLayoutEffect(() => {
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [endValue, duration]);

  return displayValue;
};

interface AnimatedNumberProps {
  value: string | number;
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value }) => {
  const displayValue = useAnimatedNumber(typeof value === 'string' ? parseInt(value, 10) : value);
  return <span>{displayValue}</span>;
};
