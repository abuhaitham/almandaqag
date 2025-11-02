
import React, { useEffect, useState, useRef } from 'react';

interface CountUpProps {
  end: number;
  duration?: number;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const easeOutExpo = (t: number) => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  };

  useEffect(() => {
    const startCountUp = () => {
      let start = 0;
      const startTime = Date.now();
      
      const frame = () => {
        const now = Date.now();
        const progress = (now - startTime) / duration;
        
        if (progress < 1) {
          setCount(Math.round(end * easeOutExpo(progress)));
          requestAnimationFrame(frame);
        } else {
          setCount(end);
        }
      };
      
      requestAnimationFrame(frame);
    };

    if (ref.current) {
        observer.current = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    startCountUp();
                    observer.current?.disconnect();
                }
            },
            {
                threshold: 0.1,
            }
        );
        observer.current.observe(ref.current);
    }

    return () => {
      observer.current?.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end, duration]);

  return <span ref={ref}>{count.toLocaleString('ar-EG')}</span>;
};

export default CountUp;
