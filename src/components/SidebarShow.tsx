import React, { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { useMouse } from 'react-use'

interface SidebarShowProps {
  isSidebarHidden: boolean
  setIsSidebarHidden: (hidden: boolean) => void
}

/**
 * When sidebar is hidden this component shows an arrow to reopen it.
 */
export const SidebarShow: React.FC<SidebarShowProps> = ({ isSidebarHidden, setIsSidebarHidden }) => {
  const ref = useRef(null)
  const { docX } = useMouse(ref)
  const [isButtonVisible, setIsButtonVisible] = useState(false)

  useEffect(() => {
    if (!isSidebarHidden) {
      return
    }
    if (!isButtonVisible && docX <= 10) {
      setIsButtonVisible(true)
    }
    if (isButtonVisible && docX > 30) {
      setIsButtonVisible(false)
    }
  }, [docX, isSidebarHidden])

  return (
    <AnimatePresence>
      <div key="mouse-tracker" ref={ref} className="absolute left-0 top-0 w-[2px] h-full z-30 bg-transparent" />

      {isSidebarHidden && isButtonVisible && (
        <motion.div
          key="sidebar-show-button"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-30 bg-transparent"
        >
          <Button
            variant="ghost"
            onClick={() => setIsSidebarHidden(false)}
            className="p-1 bg-transparent rounded-r-full"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
