import { useSidenavStore } from '@/stores/sidenav';
import { storeToRefs } from 'pinia';

const useSidenavComposable = () => {
  const sidenavStore = useSidenavStore();
  const { isOpened } = storeToRefs(sidenavStore);

  const toggleMenu = () => {
    sidenavStore.toggleOpened();
  };
  return {
    isOpened,
    toggleMenu,
  };
};

export default useSidenavComposable;
