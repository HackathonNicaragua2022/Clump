import { createSlice } from '@reduxjs/toolkit';
import Toast from '../../components/Toast'
import { v4 as uuidv4 } from 'uuid';

export const toastSlice = createSlice({
    name: 'toast',
    initialState: {
        value: []
    },
    reducers: {
        pushToast: (state, action) => {
            const { title, description, isAlert } = action.payload;
            state.value.push(<Toast 
                key={uuidv4()}
                title={title}
                description={description}
                isAlert={isAlert}
            />);
        },
        pushToasts: (state, action) => {
            const newToasts = action.payload.map(toast => {
                return <Toast 
                    key={uuidv4()}
                    {...toast}
                />;
            });

            state.value = [...state.value, ...newToasts];
        },
        clearAll: (state) => {
            state.value = [];
        }
    }
});

export const { pushToast, pushToasts, clearAll } = toastSlice.actions;

export default toastSlice.reducer;