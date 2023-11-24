import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: '',
};

export const userSlice = createSlice({
  name: 'Auth',
  initialState: initialState,
  reducers: {
    changeUserId: (state, inputValue: PayloadAction<string>) => {
      state.userId = inputValue.payload;
    },
  },
});

export const { changeUserId } = userSlice.actions;

export default userSlice.reducer;
