import { Button } from "@/components/ui/button"
import { Pin, X } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip.js'
import { App } from "./apps.js"

interface AppListItemProps {
  app: App
  isOpen: boolean
  onSelect: (app: App) => void
  onPin?: (app: App) => void
  onClose?: (app: App) => void
  onOpen?: (app: App) => void
}

export const AppListItem: React.FC<AppListItemProps> = ({ app, isOpen, onSelect, onPin, onClose, onOpen }) => (
  <div
    className={`flex items-center mb-2 p-2 rounded-full cursor-pointer group hover:bg-primary/10 transition-colors duration-200 ${isOpen ? 'bg-primary/20' : ''}`}
    onClick={() => onSelect(app)}
  >
    <img src={app.icon} alt={app.name} className="w-10 h-10 mr-3 rounded-xl" />
    <span className="font-medium">{app.name}</span>
    {isOpen ? (
      <div className="ml-auto flex">
        {onPin && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => {
                    e.stopPropagation();
                    onPin(app);
                  }}
                >
                  <Pin className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Pin App</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
        {onClose && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose(app);
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Close App</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    ) : (
      onOpen && (
        <Button
          variant="ghost"
          size="sm"
          className="ml-auto"
          onClick={(e) => {
            e.stopPropagation();
            onOpen(app);
          }}
        >
          Open
        </Button>
      )
    )}
  </div>
)

