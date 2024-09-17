import { useState } from 'react';
import { Link } from 'react-scroll';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PlayCircle, RefreshCcw } from 'lucide-react';
import { SECTIONS } from '@/lib/constants';
import { copy } from '@/copy';
import { CodeEditor } from '@/components/CodeEditor';
import { HeroSection } from '@/components/HeroSection';
import { Section } from '@/components/Section';
import { ComparisonSection } from '@/components/ComparisonSection';
import { Footer } from '@/components/Footer';

export function App() {
  const [demoCode, setDemoCode] = useState(copy.demoInitialCode);
  const [output, setOutput] = useState('');

  const runCode = () => {
    try {
      const result = eval(demoCode);
      setOutput(`Output: ${result}`);
    } catch (error) {
      setOutput(`Error: ${(error as Error).message}`);
    }
  };

  const resetCode = () => {
    setDemoCode(copy.demoInitialCode);
  };

  return (
    <div className="font-sans bg-gray-50">
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 backdrop-filter backdrop-blur-lg bg-opacity-30">
        <ul className="flex justify-center space-x-6 p-4">
          {SECTIONS.map(({ id, title }) => (
            <li key={id}>
              <Link to={id} smooth={true} duration={500} className="cursor-pointer text-gray-600 hover:text-blue-500 transition-colors font-medium text-sm uppercase tracking-wider">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <HeroSection />

      <Section
        id="compile-time"
        title={copy.compileTimeTitle}
        content={copy.compileTimeContent}
        titleClassName="text-blue-600"
        contentClassName="text-blue-800"
      >
        <ComparisonSection
          title1={copy.compileTimeOptimizationTitle}
          code1={copy.CODE_SAMPLES.compileTime}
          title2={copy.runtimeFetchingTitle}
          code2={copy.CODE_SAMPLES.runtime}
          performanceData={copy.PERFORMANCE_DATA.compileTime}
          titleClassName="text-blue-500"
        />
      </Section>

      <Section
        id="local-execution"
        title={copy.localExecutionTitle}
        content={copy.localExecutionContent}
        titleClassName="text-green-600"
        contentClassName="text-green-800"
      >
        <ComparisonSection
          title1="Local Execution"
          code1={copy.CODE_SAMPLES.localExecution}
          title2="Remote Execution"
          code2={copy.CODE_SAMPLES.remoteExecution}
          performanceData={copy.PERFORMANCE_DATA.localExecution}
          titleClassName="text-green-500"
        />
      </Section>

      <Section
        id="caching"
        title={copy.cachingTitle}
        content={copy.cachingContent}
        titleClassName="text-purple-600"
        contentClassName="text-purple-800"
      >
        <ComparisonSection
          title1="Cached View Function"
          code1={copy.CODE_SAMPLES.cachedViewFunction}
          title2="Uncached View Function"
          code2={copy.CODE_SAMPLES.uncachedViewFunction}
          performanceData={copy.PERFORMANCE_DATA.cachedViewFunction}
          titleClassName="text-purple-500"
        />
      </Section>

      <Section
        id="prefetching"
        title={copy.prefetchingTitle}
        content={copy.prefetchingContent}
        titleClassName="text-red-600"
        contentClassName="text-red-800"
      >
        <ComparisonSection
          title1="Optimistic Prefetching"
          code1={copy.CODE_SAMPLES.optimisticPrefetching}
          title2="Regular Fetching"
          code2={copy.CODE_SAMPLES.regularFetching}
          performanceData={copy.PERFORMANCE_DATA.optimisticPrefetching}
          titleClassName="text-red-500"
        />
      </Section>

      <Section
        id="deployless-calls"
        title={copy.deploylessCallsTitle}
        content={copy.deploylessCallsContent}
        titleClassName="text-yellow-600"
        contentClassName="text-yellow-800"
      >
        <ComparisonSection
          title1="Deployless Calls"
          code1={copy.CODE_SAMPLES.deploylessCalls}
          title2="Traditional Calls"
          code2={copy.CODE_SAMPLES.traditionalCalls}
          performanceData={copy.PERFORMANCE_DATA.deploylessCalls}
          titleClassName="text-yellow-500"
        />
      </Section>

      <Section
        id="demo"
        title={copy.demoTitle}
        content={copy.demoContent}
        titleClassName="text-orange-600"
        contentClassName="text-orange-800"
      >
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-4 text-orange-600 font-serif">{copy.optimizationPlaygroundTitle}</h3>
          <CodeEditor code={demoCode} onChange={setDemoCode} />
        </div>
        <div className="flex justify-center space-x-4 mb-6">
          <Button onClick={runCode} className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
            <PlayCircle size={24} className="mr-2" />
            {copy.runCodeButton}
          </Button>
          <Button onClick={resetCode} className="bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
            <RefreshCcw size={24} className="mr-2" />
            {copy.resetCodeButton}
          </Button>
        </div>
        <Card className="bg-gray-100 shadow-inner">
          <CardContent className="p-4">
            <h4 className="font-bold mb-2 font-serif">{copy.outputTitle}</h4>
            <pre className="whitespace-pre-wrap text-sm">{output}</pre>
          </CardContent>
        </Card>
      </Section>

      <Footer />
    </div>
  );
}
