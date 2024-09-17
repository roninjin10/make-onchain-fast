import { ScrollArea } from './ui/scroll-area.js'
import { AppListItem } from './AppListItem'
import { useAppStore } from './useAppStore.js'

export const OpenAppsList = () => {
  const {
    openApps,
    setSelectedApp,
    togglePinApp,
    closeApp,
  } = useAppStore()
  return (
    <ScrollArea className="h-[30vh] mb-6">
      {openApps.map(app => (
        <AppListItem
          key={app.id}
          app={app}
          isOpen={true}
          onSelect={setSelectedApp}
          onPin={togglePinApp}
          onClose={closeApp}
        />
      ))}
    </ScrollArea>
  )
}
