import { create } from 'zustand'
import { App } from './apps'

interface AppState {
  selectedApp: App | null
  installedApps: App[]
  openApps: App[]
  pinnedApps: App[]
  recentApps: App[]
  isSidebarHidden: boolean
  searchTerm: string
  isTiled: boolean
  isMobileMenuOpen: boolean
  setSelectedApp: (app: App | null) => void
  installApp: (app: App) => void
  updateApp: (app: App) => void
  openApp: (app: App) => void
  closeApp: (app: App) => void
  togglePinApp: (app: App) => void
  setIsSidebarHidden: (hidden: boolean) => void
  setSearchTerm: (term: string) => void
  toggleIsTiled: (tiled?: boolean) => void
  setIsMobileMenuOpen: (open: boolean) => void
}

export const useAppStore = create<AppState>((set) => ({
  selectedApp: null,
  installedApps: [],
  openApps: [],
  pinnedApps: [],
  recentApps: [],
  isSidebarHidden: window.innerWidth < 768,
  searchTerm: '',
  isTiled: false,
  isMobileMenuOpen: false,

  setSelectedApp: (app) => set({ selectedApp: app }),

  installApp: (app) => set((state) => ({
    installedApps: state.installedApps.find(a => a.id === app.id)
      ? state.installedApps
      : [...state.installedApps, { ...app, installedVersion: app.version }]
  })),

  updateApp: (app) => set((state) => ({
    installedApps: state.installedApps.map(a =>
      a.id === app.id ? { ...a, installedVersion: app.latestVersion } : a
    )
  })),

  openApp: (app) => set((state) => ({
    openApps: state.openApps.find(a => a.id === app.id)
      ? state.openApps
      : [...state.openApps, app],
    recentApps: [app, ...state.recentApps.filter(a => a.id !== app.id).slice(0, 4)]
  })),

  closeApp: (app) => set((state) => ({
    openApps: state.openApps.filter(a => a.id !== app.id)
  })),

  togglePinApp: (app) => set((state) => ({
    pinnedApps: state.pinnedApps.find(a => a.id === app.id)
      ? state.pinnedApps.filter(a => a.id !== app.id)
      : [...state.pinnedApps, app]
  })),

  setIsSidebarHidden: (hidden) => set({ isSidebarHidden: hidden }),
  setSearchTerm: (term) => set({ searchTerm: term }),
  toggleIsTiled: (tiled) => set(state => ({ isTiled: tiled === undefined ? !state.isTiled : tiled })),
  setIsMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
}))
