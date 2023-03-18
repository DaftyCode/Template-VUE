import { defineStore } from 'pinia';

export const useSidenavStore = defineStore('sidenav', {
  state: () => ({ isOpened: false }),
  actions: {
    toggleOpened() {
      console.log('toggleOpened');
      this.isOpened = !this.isOpened;
      console.log(this.isOpened);
    },
  },
});
