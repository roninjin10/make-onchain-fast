import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { App } from './apps'
import { AppActionButton } from "./AppActionButton"
import { AppRating } from "./AppRating"
import { useAppStore } from "./useAppStore"

interface AppHeaderProps {
  app: App
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  app,
}) => {
  const { setSelectedApp, isInstalled, hasUpdate, onAction } = useAppStore(
    ({ setSelectedApp, installApp, openApp, updateApp, installedApps }) => {
      const installedApp = installedApps.find(a => a.id === app.id)
      const isInstalled = !!installedApp;
      const hasUpdate = isInstalled && installedApp?.installedVersion !== app.latestVersion;
      return ({
        setSelectedApp,
        isInstalled,
        hasUpdate,
        onAction: () => {
          if (!isInstalled) {
            installApp(app);
          } else if (hasUpdate) {
            updateApp(app);
          } else {
            openApp(app);
          }
        }
      })
    })

  return (
    <>
      <Button variant="ghost" onClick={() => setSelectedApp(null)} className="mb-6">
        <ChevronLeft className="mr-2 h-4 w-4" /> Back to Apps
      </Button>
      <div className="flex flex-col sm:flex-row items-start sm:items-center mb-8">
        <motion.img
          src={app.icon}
          alt={app.name}
          className="w-32 h-32 mb-4 sm:mb-0 sm:mr-6 rounded-3xl shadow-lg"
          layoutId={`app-icon-${app.id}`}
        />
        <div className="flex-grow mb-4 sm:mb-0">
          <motion.h2
            className="text-3xl font-bold mb-2"
            layoutId={`app-name-${app.id}`}
          >
            {app.name}
          </motion.h2>
          <p className="text-xl text-muted-foreground mb-4">{app.category}</p>
          <AppRating rating={app.rating} />
        </div>
        <AppActionButton
          isInstalled={isInstalled}
          hasUpdate={hasUpdate}
          onAction={onAction}
        />
      </div>
    </>
  )

}
