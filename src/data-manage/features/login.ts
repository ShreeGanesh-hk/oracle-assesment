import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface ILogin {
    loggedIn: boolean,
    user:string,
}

const initialState = {
    loggedIn: false,
    user:"",
} as ILogin

const LoginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setLogin : (state, action: PayloadAction<ILogin>) =>{
            state.loggedIn = action.payload.loggedIn
            state.user = action.payload.user
    }
}
})

export const {setLogin} = LoginSlice.actions
export default LoginSlice.reducer
