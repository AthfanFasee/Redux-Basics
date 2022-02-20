import {createSlice} from '@reduxjs/toolkit';


const initialStateValues = "";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {value: initialStateValues},
    reducers: {
        chnageColor:  (state, action ) => {
            state.value = action.payload;
        }
        
    }
})

export const {chnageColor} = themeSlice.actions;

export default themeSlice.reducer;
