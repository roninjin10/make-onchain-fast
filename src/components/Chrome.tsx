import { useAppStore } from './useAppStore.js'
import { motion, AnimatePresence } from "framer-motion"
import { Sidebar } from './Sidebar'
import { MobileMenu } from './MobileMenu'
import { SidebarShow } from './SidebarShow.js'
import { Card } from './ui/card.js'
import { FC, PropsWithChildren } from 'react'

export const Chrome: FC<PropsWithChildren<{}>> = ({ children }) => {
  const {
    isSidebarHidden,
    setIsSidebarHidden,
  } = useAppStore(({
    isSidebarHidden,
    setIsSidebarHidden,
  }) => ({
    isSidebarHidden,
    setIsSidebarHidden,
  }))

  return (
    <div className="flex flex-col md:flex-row h-screen bg-pink-200">
      <MobileMenu />
      <AnimatePresence>
        {!isSidebarHidden && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "20rem", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="hidden md:block h-full"
          >
            <Sidebar />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex-1 flex flex-col h-full relative" >
        <SidebarShow isSidebarHidden={isSidebarHidden} setIsSidebarHidden={setIsSidebarHidden} />
        <Card className={`bg-white ${isSidebarHidden ? '' : 'm-4 '}absolute inset-0 overflow-hidden flex-1 flex flex-col`}>
          <div className="flex-1 overflow-y-auto p-4 pb-8">
            {children}
          </div>
        </Card>
      </div>
    </div>
  )
}
