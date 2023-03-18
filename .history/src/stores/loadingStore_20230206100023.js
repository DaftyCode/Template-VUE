import { defineStore } from 'pinia';

export const useLoadingStore = defineStore('loading', {
  state: () => ({ isLoading: false }),
  actions: {
    isLoadingTrue() {
      this.isLoading = true;
    },
    isLoadingFalse() {
      this.isLoading = false;
    },
  },
});
