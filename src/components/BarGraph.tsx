import { motion, useInView, useAnimationControls } from 'framer-motion';
import {AnimatedNumber} from '@/components/AnimatedNumber';
import { useEffect, useRef } from 'react';

interface BarDataItem {
  label: string;
  value: number;
}

interface BarGraphProps {
  data: BarDataItem[];
}

export const BarGraph = ({ data }: BarGraphProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} className="mt-8">
      {data.map((item, index) => (
        <div key={index} className="mb-6">
          <div className="flex items-center mb-2">
            <span className="w-24 text-sm font-medium text-gray-600">{item.label}</span>
            <div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                initial="hidden"
                animate={controls}
                variants={{
                  visible: { width: `${(item.value / 100) * 100}%` },
                  hidden: { width: 0 },
                }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
            <span className="ml-2 text-sm font-medium w-16 text-right text-gray-600">
              <AnimatedNumber value={item.value} />ms
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
