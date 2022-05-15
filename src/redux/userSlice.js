import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    usersList: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.usersList = [
        ...state.usersList,
        {
          name: action.payload.name,
          email: action.payload.email,
        },
      ];
    },
    removeUserByEmail: (state, action) => {
      state.usersList = state.usersList.filter(
        (user) => user.email !== action.payload
      );
    },
  },
});

export const { addUser, removeUserByEmail } = userSlice.actions;

export const usersReducer = userSlice.reducer;
