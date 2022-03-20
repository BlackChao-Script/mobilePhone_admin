import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'indexStore',
  state: () => ({
    asideOpen: true,
    path: '/home/dashboard',
    drawer: false,
    showEdit: false,
  }),
  actions: {
    changAsideOpen() {
      this.asideOpen = !this.asideOpen
    },
    changPath() {
      if (window.sessionStorage.getItem('path') == null) return
      this.path = window.sessionStorage.getItem('path') as string
    },
    changDrawer() {
      this.drawer = !this.drawer
    },
  },
})
