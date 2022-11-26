import { configureStore } from '@reduxjs/toolkit';
import toastReducer from './Toast';

export default configureStore({
    reducer: {
        toast: toastReducer,
    },
});