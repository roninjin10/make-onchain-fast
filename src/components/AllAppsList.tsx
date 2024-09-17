import { ScrollArea } from './ui/scroll-area.js'
import { AppListItem } from './AppListItem'
import { useAppStore } from './useAppStore.js'
import { apps } from './apps.js'
import { useMemo } from 'react'

export const AllAppsList = () => {
  const {
    searchTerm,
    openApps,
    setSelectedApp,
  } = useAppStore()
  const filteredApps = useMemo(() => apps.filter(app =>
    app.name.toLowerCase().includes(searchTerm.toLowerCase())
  ), [searchTerm])

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Installed Apps</h2>
      <ScrollArea className="h-[30vh]">
        {filteredApps.map(app => (
          <AppListItem
            key={app.id}
            app={app}
            isOpen={openApps.some(a => a.id === app.id)}
            onSelect={setSelectedApp}
            onOpen={useAppStore.getState().openApp}
          />
        ))}
      </ScrollArea>
    </>
  )
}
