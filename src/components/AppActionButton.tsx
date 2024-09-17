import { Button } from "@/components/ui/button"
import { RefreshCw, Check, Download } from "lucide-react"

interface AppActionButtonProps {
  isInstalled: boolean
  hasUpdate: boolean
  onAction: () => void
}

export const AppActionButton: React.FC<AppActionButtonProps> = ({ isInstalled, hasUpdate, onAction }) => (
  <Button
    className="w-full sm:w-auto"
    size="lg"
    onClick={onAction}
  >
    {isInstalled ? (
      hasUpdate ? (
        <>
          <RefreshCw className="mr-2 h-5 w-5" />
          Update
        </>
      ) : (
        <>
          <Check className="mr-2 h-5 w-5" />
          Open
        </>
      )
    ) : (
      <>
        <Download className="mr-2 h-5 w-5" />
        Install
      </>
    )}
  </Button>
)
