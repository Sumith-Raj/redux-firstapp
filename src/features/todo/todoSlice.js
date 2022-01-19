import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { loading } from "./todoAPI";

const initialState={
    data:[],
    status:'Async Add'
}

export const todoSlice = createSlice({
 name:'todo',
 initialState,
 reducers: {
     add: (state, action) => {
         state.data.push({id:nanoid(), item:action.payload})
     },
     remove: (state, action) =>{
         state.data=state.data.filter(item=> item.id!==action.payload)
     }
 },
 extraReducers: (builder) => {
     builder
     .addCase(loadingAsync.pending,(state)=>{
         state.status = 'loading..'
     })
     .addCase(loadingAsync.fulfilled,(state, action)=>{
        state.data.push({id:nanoid(), item:action.payload})
        state.status = 'Async Add'
     })
 }
})

export const loadingAsync = createAsyncThunk(
    'todo/loading',
    async(input)=>{
        const response = await loading(input)
        return response.data
    }
)

export const tododata = (state) => state.todo.data
export const todostatus = (state) => state.todo.status
export const { add , remove} = todoSlice.actions
export default todoSlice.reducer