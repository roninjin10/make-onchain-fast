'use client'

import React, { useEffect, useState, useRef } from 'react';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ChevronDown, ExternalLink, Mail, HardHat, Hammer, Zap, Cpu, BookOpen, GraduationCap, Smile, Sun, Droplets, Sparkles, Code, PlayCircle, RefreshCcw, Github, Coffee } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const CodeEditor = ({ code, onChange }) => (
  <Card className="bg-gray-900 shadow-lg border border-gray-800 overflow-hidden">
    <CardHeader className="bg-gray-800 border-b border-gray-700 p-2">
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
    </CardHeader>
    <CardContent className="p-4">
      <textarea
        className="w-full h-64 text-sm text-gray-300 bg-transparent resize-none focus:outline-none font-mono"
        value={code}
        onChange={(e) => onChange(e.target.value)}
        style={{
          backgroundImage: 'linear-gradient(transparent 50%, rgba(69, 78, 89, 0.2) 50%)',
          backgroundSize: '100% 3rem',
          backgroundPosition: '0 -2px',
          lineHeight: '1.5rem'
        }}
      />
    </CardContent>
  </Card>
);

const AnimatedNumber = ({ value, inView }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;

      let timer = setInterval(() => {
        start += 1;
        setDisplayValue(start);
        if (start === end) clearInterval(timer);
      }, 20);

      return () => {
        clearInterval(timer);
      };
    }
  }, [value, inView]);

  return <span>{displayValue}</span>;
};

const BarGraph = ({ data }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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
              <AnimatedNumber value={item.value} inView={inView} />ms
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

const Section = ({ id, title, content, children }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Element name={id} className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 }
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center max-w-4xl mx-auto px-4"
      >
        <motion.h2 
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 }
          }}
          className="text-4xl font-bold mb-6 text-gray-800 font-serif tracking-tight"
        >
          {title}
        </motion.h2>
        <motion.p 
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 }
          }}
          className="text-xl text-gray-600 font-light leading-relaxed mb-8"
        >
          {content}
        </motion.p>
        {children}
      </motion.div>
    </Element>
  );
};

const OptimizationStep = ({ step, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl"
  >
    <h3 className="font-bold mb-2 text-lg text-gray-800 font-serif">{step}</h3>
    <p className="text-gray-600 font-light">{description}</p>
  </motion.div>
);

export function FastOnchainInteractionsComponent() {
  const controls = useAnimation();
  const [demoCode, setDemoCode] = useState(`
// Example optimization code
function optimizedFunction(x) {
  // Implement your optimization here
  return x * 2;
}

// Test the function
console.log(optimizedFunction(5));
  `);

  const [output, setOutput] = useState('');

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3 },
    }));
  }, [controls]);

  const runCode = () => {
    try {
      // This is a simple evaluation. In a real-world scenario,
      // you'd want to use a more secure method of running user code.
      const result = eval(demoCode);
      setOutput(`Output: ${result}`);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  const compileTimeCode = `
// Compile-time optimization
const CONSTANT_VALUE = 42;
function optimizedFunction(x) {
  return x * CONSTANT_VALUE;
}`;

  const runtimeCode = `
// Runtime fetching
async function fetchValue() {
  const response = await fetch('/api/value');
  const data = await response.json();
  return data.value;
}
async function runtimeFunction(x) {
  const value = await fetchValue();
  return x * value;
}`;

  const localExecutionCode = `
// Local execution
function localFunction(x, y) {
  return x * y + Math.sqrt(x);
}`;

  const remoteExecutionCode = `
// Remote execution
async function remoteFunction(x, y) {
  const response = await fetch(\`/api/calculate?x=\${x}&y=\${y}\`);
  const result = await response.json();
  return result.value;
}`;

  const cachedViewFunctionCode = `
// Cached view function
const cache = new Map();

async function cachedViewFunction(address) {
  if (cache.has(address)) {
    return cache.get(address);
  }
  
  const balance = await getBalance(address);
  cache.set(address, balance);
  return balance;
}`;

  const uncachedViewFunctionCode = `
// Uncached view function
async function uncachedViewFunction(address) {
  const balance = await getBalance(address);
  return balance;
}`;

  const optimisticPrefetchingCode = `
// Optimistic prefetching
function prefetchUserData(userId) {
  const prefetchPromise = fetch(\`/api/user/\${userId}\`)
    .then(response => response.json())
    .then(data => {
      // Store prefetched data in cache
      cache.set(\`user_\${userId}\`, data);
    });
  
  // Return promise for potential error handling
  return prefetchPromise;
}

// Usage
prefetchUserData(123);  // Prefetch data for user 123
`;

  const regularFetchingCode = `
// Regular fetching
async function fetchUserData(userId) {
  const response = await fetch(\`/api/user/\${userId}\`);
  const data = await response.json();
  return data;
}

// Usage
const userData = await fetchUserData(123);
`;

  const deploylessCallsCode = `
// Deployless calls
import { ethers } from 'ethers';

async function deploylessCall(contractAddress, abi, functionName, args) {
  const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/YOUR-PROJECT-ID');
  const contract = new ethers.Contract(contractAddress, abi, provider);
  
  const data = contract.interface.encodeFunctionData(functionName, args);
  const result = await provider.call({ to: contractAddress, data });
  
  return contract.interface.decodeFunctionResult(functionName, result);
}

// Usage
const result = await deploylessCall(
  '0x1234...5678',
  ['function balanceOf(address) view returns (uint256)'],
  'balanceOf',
  ['0xabcd...ef01']
);
`;

  const traditionalCallsCode = `
// Traditional contract deployment and calls
import { ethers } from 'ethers';

async function traditionalCall(contractAddress, abi, functionName, args) {
  const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/YOUR-PROJECT-ID');
  const signer = new ethers.Wallet('YOUR-PRIVATE-KEY', provider);
  const contract = new ethers.Contract(contractAddress, abi, signer);
  
  const tx = await contract[functionName](...args);
  await tx.wait();
  
  return tx;
}

// Usage
const tx = await traditionalCall(
  '0x1234...5678',
  ['function transfer(address to, uint256 amount) returns (bool)'],
  'transfer',
  ['0xabcd...ef01', ethers.utils.parseEther('1.0')]
);
`;

  const performanceData = [
    { label: 'Compile-time', value: 0 },
    { label: 'Runtime', value: 100 },
  ];

  const localExecutionPerformanceData = [
    { label: 'Local', value: 1 },
    { label: 'Remote', value: 100 },
  ];

  const cachedViewFunctionPerformanceData = [
    { label: 'Cached', value: 5 },
    { label: 'Uncached', value: 100 },
  ];

  const optimisticPrefetchingPerformanceData = [
    { label: 'Prefetched', value: 10 },
    { label: 'Regular', value: 100 },
  ];

  const deploylessCallsPerformanceData = [
    { label: 'Deployless', value: 20 },
    { label: 'Traditional', value: 100 },
  ];

  return (
    <div className="font-sans bg-gray-50">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 backdrop-filter backdrop-blur-lg bg-opacity-30">
        <ul className="flex justify-center space-x-6 p-4">
          <li><Link to="hero" smooth={true} duration={500} className="cursor-pointer text-gray-600 hover:text-blue-500 transition-colors font-medium text-sm uppercase tracking-wider">Home</Link></li>
          <li><Link to="compile-time" smooth={true} duration={500} className="cursor-pointer text-gray-600 hover:text-blue-500 transition-colors font-medium text-sm uppercase tracking-wider">Compile-Time</Link></li>
          <li><Link to="local-execution" smooth={true} duration={500} className="cursor-pointer text-gray-600 hover:text-blue-500 transition-colors font-medium text-sm uppercase tracking-wider">Local Execution</Link></li>
          <li><Link to="caching" smooth={true} duration={500} className="cursor-pointer text-gray-600 hover:text-blue-500 transition-colors font-medium text-sm uppercase tracking-wider">Caching</Link></li>
          <li><Link to="prefetching" smooth={true} duration={500} className="cursor-pointer text-gray-600 hover:text-blue-500 transition-colors font-medium text-sm uppercase tracking-wider">Prefetching</Link></li>
          <li><Link to="deployless-calls" smooth={true} duration={500} className="cursor-pointer text-gray-600 hover:text-blue-500 transition-colors font-medium text-sm uppercase tracking-wider">Deployless Calls</Link></li>
          <li><Link to="demo" smooth={true} duration={500} className="cursor-pointer text-gray-600 hover:text-blue-500 transition-colors font-medium text-sm uppercase tracking-wider">Demo</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <Element name="hero" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
        <div className="relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-center font-serif tracking-tight leading-tight"
          >
            Making Onchain Interactions Fast
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl mb-12 text-center max-w-2xl font-light leading-relaxed"
          >
            Optimize your blockchain interactions for lightning-fast performance in the heart of innovation
          </motion.p>
          <Link to="demo" smooth={true} duration={500}>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-100 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Try Interactive Demo
            </Button>
          </Link>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8"
        >
          <ChevronDown size={32} className="text-white opacity-75" />
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      </Element>

      {/* Compile-Time Data Optimization Section */}
      <Section
        id="compile-time"
        title="Compile-Time Data Optimization"
        content="Optimize your data structures and algorithms at compile-time to reduce runtime overhead and improve performance."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -50 }
            }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800 font-serif">Compile-Time Optimization</h3>
            <CodeEditor code={compileTimeCode} onChange={() => {}} />
          </motion.div>
          <motion.div
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 }
            }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800 font-serif">Runtime Fetching</h3>
            <CodeEditor code={runtimeCode} onChange={() => {}} />
          </motion.div>
        </div>
        <motion.div
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 }
          }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800 font-serif">Performance Comparison</h3>
          <BarGraph data={performanceData} />
        </motion.div>
      </Section>

      {/* Local Execution Section */}
      <Section
        id="local-execution"
        title="Local Execution of Pure Functions"
        content="Execute pure functions locally to minimize network calls and reduce latency in your blockchain interactions."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -50 }
            }}
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-300 font-serif">Local Execution</h3>
            <CodeEditor code={localExecutionCode} onChange={() => {}} />
          </motion.div>
          <motion.div
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 }
            }}
          >
            <h3 className="text-2xl font-bold mb-4 text-purple-300 font-serif">Remote Execution</h3>
            <CodeEditor code={remoteExecutionCode} onChange={() => {}} />
          </motion.div>
        </div>
        <motion.div
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 }
          }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-blue-200 font-serif">Performance Comparison</h3>
          <BarGraph data={localExecutionPerformanceData} />
        </motion.div>
      </Section>

      {/* Cached View Function Results Section */}
      <Section
        id="caching"
        title="Cached View Function Results"
        content="Implement smart caching strategies to store and reuse frequently accessed blockchain data, reducing unnecessary network requests and improving response times."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -50 }
            }}
          >
            <h3 className="text-2xl font-bold mb-4 font-serif text-amber-800">Cached View Function</h3>
            <CodeEditor code={cachedViewFunctionCode} onChange={() => {}} />
          </motion.div>
          <motion.div
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 }
            }}
          >
            <h3 className="text-2xl font-bold mb-4 font-serif text-amber-800">Uncached View Function</h3>
            <CodeEditor code={uncachedViewFunctionCode} onChange={() => {}} />
          </motion.div>
        </div>
        <motion.div
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 }
          }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold mb-6 font-serif text-amber-800">Performance Comparison</h3>
          <BarGraph data={cachedViewFunctionPerformanceData} />
        </motion.div>
      </Section>

      {/* Optimistic Prefetching Section */}
      <Section
        id="prefetching"
        title="Optimistic Prefetching"
        content="Anticipate user actions and prefetch data to provide a seamless and responsive user experience in your dApp."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -50 }
            }}
          >
            <h3 className="text-2xl font-bold mb-4 text-pink-600 font-serif">Optimistic Prefetching</h3>
            <CodeEditor code={optimisticPrefetchingCode} onChange={() => {}} />
          </motion.div>
          <motion.div
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 }
            }}
          >
            <h3 className="text-2xl font-bold mb-4 text-yellow-600 font-serif">Regular Fetching</h3>
            <CodeEditor code={regularFetchingCode} onChange={() => {}} />
          </motion.div>
        </div>
        <motion.div
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 }
          }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800 font-serif">Performance Comparison</h3>
          <BarGraph data={optimisticPrefetchingPerformanceData} />
        </motion.div>
      </Section>

      {/* Deployless Calls Section */}
      <Section
        id="deployless-calls"
        title="Deployless Calls for Waterfall Requests"
        content="Utilize deployless calls to optimize complex, interdependent blockchain interactions and reduce overall transaction time."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -50 }
            }}
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-300 font-serif">Deployless Calls</h3>
            <CodeEditor code={deploylessCallsCode} onChange={() => {}} />
          </motion.div>
          <motion.div
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 50 }
            }}
          >
            <h3 className="text-2xl font-bold mb-4 text-purple-300 font-serif">Traditional Calls</h3>
            <CodeEditor code={traditionalCallsCode} onChange={() => {}} />
          </motion.div>
        </div>
        <motion.div
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 }
          }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-blue-200 font-serif">Performance Comparison</h3>
          <BarGraph data={deploylessCallsPerformanceData} />
        </motion.div>
      </Section>

      {/* Interactive Demo Section */}
      <Section
        id="demo"
        title="Interactive Demo"
        content="Experience the power of optimization firsthand! Modify the code below and see the results in real-time."
      >
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-4 text-orange-600 font-serif">Optimization Playground</h3>
          <CodeEditor code={demoCode} onChange={setDemoCode} />
        </div>
        <div className="flex justify-center space-x-4 mb-6">
          <Button onClick={runCode} className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
            <PlayCircle size={24} className="mr-2" />
            Run Code
          </Button>
          <Button onClick={() => setDemoCode(`
// Example optimization code
function optimizedFunction(x) {
  // Implement your optimization here
  return x * 2;
}

// Test the function
console.log(optimizedFunction(5));
          `)} className="bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
            <RefreshCcw size={24} className="mr-2" />
            Reset Code
          </Button>
        </div>
        <Card className="bg-gray-100 shadow-inner">
          <CardContent className="p-4">
            <h4 className="font-bold mb-2 font-serif">Output:</h4>
            <pre className="whitespace-pre-wrap text-sm">{output}</pre>
          </CardContent>
        </Card>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 relative">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-6 font-serif"
          >
            Ready to optimize your onchain interactions?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 text-lg font-light"
          >
            Implement these strategies in your project and experience the speed difference!
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center space-x-6 mb-8"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <a href="#" className="hover:text-blue-300 transition-colors"><ExternalLink size={32} /></a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Visit our website</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <a href="#" className="hover:text-blue-300 transition-colors"><Mail size={32} /></a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Contact us</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <a href="#" className="hover:text-blue-300 transition-colors"><Github size={32} /></a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View source on GitHub</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Coffee size={32} className="text-yellow-500" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Fueled by Palo Alto's finest coffee</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-sm text-gray-400"
          >
            &copy; 2023 Fast Onchain Interactions. All rights reserved.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-900"></path>
          </svg>
        </div>
      </footer>
    </div>
  );
}