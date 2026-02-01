import { create } from "zustand";

type CountStore = {
  count: number;
  increaseCount: () => void;
  decreaseCount: () => void;
  resetCount: () => void;
};

const useCountStore = create<CountStore>((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decreaseCount: () => set((state) => ({ count: state.count - 1 })),
  resetCount: () => set({ count: 0 }),
}));

export default useCountStore;
