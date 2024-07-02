import { create } from 'zustand';

const types = { increase: 'INCREASE', decrease: 'DECREASE' };

const reducer = (state: any, { type, by = 1 }) => {
  switch (type) {
    case types.increase:
      return { grumpiness: state.grumpiness + by };
    case types.decrease:
      return { grumpiness: state.grumpiness - by };
  }
};

const useGrumpyStore = create((set) => ({
  grumpiness: 0,
  dispatch: (args: any) => set((state: any) => reducer(state, args)),
}));

const dispatch = useGrumpyStore((state: any) => state.dispatch);
dispatch({ type: types.increase, by: 2 });
