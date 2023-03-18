import { useLoadingStore } from '@/stores/loadingStore';
import { storeToRefs } from 'pinia';

const useLoadingComposable = () => {
  const loadingStore = useLoadingStore();
  const { isLoading } = storeToRefs(loadingStore);

  const isLoadingTrue = () => {
    loadingStore.isLoadingTrue();
  };
  const isLoadingFalse = () => {
    loadingStore.isLoadingFalse();
  };
  return {
    isLoading,
    isLoadingTrue,
    isLoadingFalse,
  };
};

export default useLoadingComposable;
