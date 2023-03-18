import { ref } from 'vue';

const useMainLayout = () => {
  const menuOpen = ref(true);

  return {
    menuOpen,

    menuToggle: () => {
      console.log('menuToggle main');
      menuOpen.value = !menuOpen.value;
    },
  };
};

export default useMainLayout;
