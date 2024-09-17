import React from 'react';
import { motion } from 'framer-motion';
import {CodeEditor} from './CodeEditor';
import {BarGraph} from './BarGraph';

interface PerformanceDataItem {
  label: string;
  value: number;
}

interface ComparisonSectionProps {
  title1: string;
  code1: string;
  title2: string;
  code2: string;
  performanceData: PerformanceDataItem[];
  titleClassName?: string;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ 
  title1, 
  code1, 
  title2, 
  code2, 
  performanceData,
  titleClassName = "text-gray-800"
}) => (
  <div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -50 }
        }}
      >
        <h3 className={`text-2xl font-bold mb-4 font-serif ${titleClassName}`}>{title1}</h3>
        <CodeEditor code={code1} onChange={() => {}} />
      </motion.div>
      <motion.div
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 50 }
        }}
      >
        <h3 className={`text-2xl font-bold mb-4 font-serif ${titleClassName}`}>{title2}</h3>
        <CodeEditor code={code2} onChange={() => {}} />
      </motion.div>
    </div>
    <motion.div
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      className="mt-12"
    >
      <h3 className={`text-2xl font-bold mb-6 font-serif ${titleClassName}`}>Performance Comparison</h3>
      <BarGraph data={performanceData} />
    </motion.div>
  </div>
);
