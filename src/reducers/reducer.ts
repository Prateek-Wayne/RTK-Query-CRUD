import {PayloadAction, createSlice} from "@reduxjs/toolkit"

type initialStateType={
    count:number
}

const initialState:initialStateType={
    count:0
}
const counter=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increament:(state)=>{
            state.count+=1;
        },
        decreament:(state)=>{
            state.count-=1;
        },
        increamentByValue:(state, action: PayloadAction<number>)=>{
            state.count=state.count+action.payload;
        }
    }
});

export const {increament,decreament,increamentByValue}=counter.actions;
export const counterReducer=counter.reducer;