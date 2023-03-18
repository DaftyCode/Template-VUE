import { defineStore } from 'pinia';

export const useSidenavStore = defineStore('sidenav', {
  state: () => ({ isOpened: false }),
  actions: {
    toggleOpened() {
      this.isOpened = !this.isOpened;
    },
  },
});
