import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import donationReducer from '../features/donation/donationSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    donations: donationReducer
  },
});
