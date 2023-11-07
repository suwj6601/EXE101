import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface IAuthState {
  userImagePath: any;
  userTryonImagePath: any;
  resultImagePath: any;
  fileListUser: any;
  fileListTryon: any;
}

const initialState: IAuthState = {
  userImagePath: null,
  userTryonImagePath: null,
  resultImagePath: null,
  fileListUser: [],
  fileListTryon: [],
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
    setFileListUser: (state: IAuthState, action: PayloadAction<any>) => {
      const { payload } = action;
      state.fileListUser.push(payload);
    },
    setFileListTryon: (state: IAuthState, action: PayloadAction<any>) => {
      const { payload } = action;
      // state.fileListTryon(payload);
    },
  },
});

export const {
  setUserImagePath,
  setUserTryOnImagePath,
  setResultImagePath,
  setFileListUser,
  setFileListTryon,
} = virtualTryon.actions;
export const virtualSelector = (state: RootState) => state.virtualTryon;
export default virtualTryon.reducer;
