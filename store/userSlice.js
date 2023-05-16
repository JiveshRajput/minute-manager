import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
    },
    reducers: {
        setName(state, action) {
            state.username = action.payload;
        },
    },
})



export const getUsername = (state) =>state.user.username;
export const { setName } = userSlice.actions;
export default userSlice.reducer;