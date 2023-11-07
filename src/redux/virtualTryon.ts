import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface IAuthState {
  userImagePath: any;
  userTryonImagePath: any;
  resultImagePath: any;
}

const initialState: IAuthState = {
  userImagePath: null,
  userTryonImagePath: null,
  resultImagePath: null,
};

export const virtualTryon = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setUserImagePath: (state: IAuthState, action: PayloadAction<any>) => {
      const { payload } = action;

      state.userImagePath = payload;
    },
    setUserTryOnImagePath: (state: IAuthState, action: PayloadAction<any>) => {
      const { payload } = action;
      state.userTryonImagePath = payload;
    },
    setResultImagePath: (state: IAuthState, action: PayloadAction<any>) => {
      const { payload } = action;
      state.resultImagePath = payload;
    },
  },
});

export const { setUserImagePath, setUserTryOnImagePath, setResultImagePath } =
  virtualTryon.actions;
export const virtualSelector = (state: RootState) => state.virtualTryon;
export default virtualTryon.reducer;
