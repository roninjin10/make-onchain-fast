import { useAppStore } from './useAppStore.js'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Sidebar } from './Sidebar'

export const MobileMenu = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useAppStore(({ isMobileMenuOpen, setIsMobileMenuOpen }) => ({ isMobileMenuOpen, setIsMobileMenuOpen }))
  return (
    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden absolute top-4 left-4 z-50">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}
