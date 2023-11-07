import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface ILayoutState {
  isSidebarOpen: boolean;
  isLightMode: boolean;
}

const initialState: ILayoutState = {
  isSidebarOpen: false,
  isLightMode: false,
};

export const layoutSlice = createSlice({
  name: "Layout",
  initialState,
  reducers: {
    actSetSidebarOpen: (
      state: ILayoutState,
      action: PayloadAction<boolean>
    ) => {},
    actToggleLightMode: (
      state: ILayoutState,
      action: PayloadAction<boolean>
    ) => {},
  },
});

export const { actSetSidebarOpen, actToggleLightMode } = layoutSlice.actions;
export const layoutSelector = (state: RootState) => state.Layout;
export default layoutSlice.reducer;
