import { createSlice } from "@reduxjs/toolkit";



const initialState: AuthState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo') || '{}') : null,

}

const authSlice = createSlice({
    initialState,
    name: 'auth',
    reducers: {
        setCredentials: (state, action: {payload: UserInfo} ) => {
            state.userInfo = action.payload
            localStorage.setItem('userInfo', JSON.stringify(action.payload))
        }
    }
})

export default authSlice.reducer
export const { setCredentials } = authSlice.actions