import React from 'react'
import { useAppStore } from './useAppStore.js'
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RefreshCw, Check } from "lucide-react"
import { apps } from './apps'
import { Button } from './ui/button.js'

export const AppGrid = () => {
  const { searchTerm, setSelectedApp, installApp, openApp, updateApp } = useAppStore()

  const filteredApps = React.useMemo(() => apps.filter(app =>
    app.name.toLowerCase().includes(searchTerm.toLowerCase())
  ), [searchTerm])

  return (
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-6"
      layout
      key="app-grid"
      transition={{ duration: 0.1 }}
    >
      <AnimatePresence>
        {filteredApps.map(app => {
          const installedApp = useAppStore.getState().installedApps.find(a => a.id === app.id);
          const isInstalled = !!installedApp;
          const hasUpdate = isInstalled && installedApp?.installedVersion !== app.latestVersion;

          return (
            <motion.div
              key={app.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.1 }}
            >
              <Card
                className="flex flex-col items-center p-4 cursor-pointer relative overflow-hidden group transition-all duration-300 hover:shadow-lg hover:scale-105"
                onClick={() => setSelectedApp(app)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img src={app.icon} alt={app.name} className="w-20 h-20 mb-4 rounded-2xl shadow-md" />
                <h3 className="text-lg font-semibold text-center mb-2">{app.name}</h3>
                <p className="text-sm text-muted-foreground text-center mb-4">{app.category}</p>
                {isInstalled && (
                  <Badge variant={hasUpdate ? "secondary" : "default"} className="absolute top-2 right-2">
                    {hasUpdate ? (
                      <RefreshCw className="w-4 h-4 text-yellow-500 mr-1" />
                    ) : (
                      <Check className="w-4 h-4 text-green-500 mr-1" />
                    )}
                    {hasUpdate ? "Update" : "Installed"}
                  </Badge>
                )}
                <Button
                  variant="secondary"
                  size="sm"
                  className="mt-auto w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!isInstalled) {
                      installApp(app);
                    } else if (hasUpdate) {
                      updateApp(app);
                    } else {
                      openApp(app);
                    }
                  }}
                >
                  {isInstalled ? (hasUpdate ? "Update" : "Open") : "Install"}
                </Button>
              </Card>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  )
}
