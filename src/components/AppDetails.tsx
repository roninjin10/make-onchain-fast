import { Card } from "@/components/ui/card"
import { App } from "./apps"
import { useAppStore } from "./useAppStore"

interface AppDetailsProps {
  app: App
}

export const AppDetails: React.FC<AppDetailsProps> = ({ app }) => {
  const installedVersion = useAppStore(state => state.installedApps.find(a => a.id === app.id)?.installedVersion)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Version History</h3>
        <p className="mb-2">Current Version: {installedVersion || 'Not installed'}</p>
        <p>Latest Version: {app.latestVersion}</p>
      </Card>
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Ratings</h3>
        <p>Average Rating: {app.rating.toFixed(1)} / 5</p>
      </Card>
    </div>
  )
}
