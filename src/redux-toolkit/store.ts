// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './firstslice';

const store = configureStore({
  reducer: {
    modalSlice: modalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
