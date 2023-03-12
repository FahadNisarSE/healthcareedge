import create from "zustand";

const useSideBarState = create((set) => ({
   show: false,
   toggle: () => set(state => ({show: !state.show}))
}))

export default useSideBarState;