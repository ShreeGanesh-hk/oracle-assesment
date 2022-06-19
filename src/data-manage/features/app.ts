import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IMovie, ISeries } from "../../service/steamingservice"

interface IApp {
    title: string,
    dialog: boolean,
    selectedData: IMovie | ISeries
}

const initialState = {
    title: "",
    dialog: false,
    selectedData: {}
} as IApp

const AppSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setAppTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload
        },
        setDialog: (state, action: PayloadAction<boolean>) => {
            if (action.payload) {
                state.dialog = action.payload
            }else{
                state.dialog = action.payload
                state.selectedData = {} as IMovie | ISeries
            }
        },
        setSelectedData: (state, action: PayloadAction<IMovie | ISeries>) => {
            state.selectedData = action.payload
        }
    }
})

export const { setAppTitle, setDialog,setSelectedData } = AppSlice.actions
export default AppSlice.reducer
