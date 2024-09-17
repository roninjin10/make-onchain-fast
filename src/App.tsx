import { Chrome } from '@/components/Chrome'
import { AppGrid } from './components/AppGrid';
import { AnimatePresence } from 'framer-motion';
import { AppPage } from './components/AppPage';
import { useAppStore } from './components/useAppStore';

export function App() {
  const selectedApp = useAppStore(({
    selectedApp,
  }) =>
    selectedApp,
  )

  return (
    <Chrome >
      <AnimatePresence mode="wait">
        {(() => {
          if (selectedApp) {
            return <AppPage key="app-page" app={selectedApp} />;
          } else {
            return <AppGrid key="app-grid" />;
          }
        })()}
      </AnimatePresence>
    </Chrome>
  )
}

