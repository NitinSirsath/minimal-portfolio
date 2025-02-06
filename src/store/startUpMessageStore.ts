import { create } from 'zustand';

interface StartStoreState {
  getStartMessage: boolean;
  removeStartMessage: () => void;
}

const useStartStore = create<StartStoreState>(set => ({
  getStartMessage: true,

  removeStartMessage: () => {
    // sessionStorage.removeItem('startMessage');
    set(() => ({ getStartMessage: false }));
  },
}));

export default useStartStore;
