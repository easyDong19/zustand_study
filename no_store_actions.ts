import { create } from 'zustand';

// export const useBoundStore = create((set) => ({
//   count: 0,
//   text: 'hello',
//   inc: () => set((state) => ({ count: state.count + 1 })),
//   setText: (text) => set({ text }),
// }));

// 따로 나눠서 만드는 걸 권장
export const useBoundStore = create(() => ({
  count: 0,
  text: 'hello',
}));

export const inc = () =>
  useBoundStore.setState((state) => ({ count: (state.count = 1) }));

export const setText = (text) => useBoundStore.setState({ text });
