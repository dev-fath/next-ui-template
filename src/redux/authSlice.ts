import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: '',
  refreshToken: '',
  expiresIn: 0,
};

export const authSlice = createSlice({
  name: 'Auth',
  initialState: initialState,
  reducers: {
    changeAccessToken: (state, inputValue: PayloadAction<string>) => {
      state.accessToken = inputValue.payload;
    },
    changeRefreshToken: (state, inputValue: PayloadAction<string>) => {
      state.refreshToken = inputValue.payload;
    },
    changeExpiresIn: (state, inputValue: PayloadAction<number>) => {
      state.expiresIn = inputValue.payload;
    },
    resetAuthToken: (state) => {
      state.accessToken = '';
      state.refreshToken = '';
      state.expiresIn = 0;
    },
  },
});

export const { changeAccessToken, changeExpiresIn, changeRefreshToken, resetAuthToken } =
  authSlice.actions;

export default authSlice.reducer;
