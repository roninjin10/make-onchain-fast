import { useAppStore } from './useAppStore.js'
import { CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Grid } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip.js'
import { SearchBar } from './SearchBar'
import { OpenAppsList } from './OpenAppsList'
import { AllAppsList } from './AllAppsList'

export const Sidebar = () => {
  const {
    setIsSidebarHidden,
    searchTerm,
    setSearchTerm,
    toggleIsTiled,
  } = useAppStore(({ setIsSidebarHidden, searchTerm, setSearchTerm, toggleIsTiled }) => ({
    setIsSidebarHidden, searchTerm, setSearchTerm, toggleIsTiled
  }))
  return (
    <div>
      <CardContent className="p-6">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Open Apps</h2>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleIsTiled()}
                  className="hover:bg-primary/10"
                >
                  <Grid className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Toggle Tile View</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <OpenAppsList />
        <AllAppsList />
      </CardContent>
      <Separator />
      <CardFooter className="p-4">
        <Button onClick={() => setIsSidebarHidden(true)} className="w-full">
          Hide Sidebar
        </Button>
      </CardFooter>
    </div>
  )
}
