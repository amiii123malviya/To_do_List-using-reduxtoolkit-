
import {createSlice} from "@reduxjs/toolkit";
const initialState={
    task:[]

}
const todoslice=createSlice({
    name:"todo",
    initialState:initialState,

    reducers:{
        addTask:(state,action)=>{
            state.task.push({id:Date.now(),work:action.payload, status:true});

        },
        recDel:(state, action)=>{
            state.task=state.task.filter(key=>key.id!==action.payload);

        },
        recComplete:(state,action)=>{
            for(var i=0; i<state.task.length; i++)
            {
                if(state.task[i].id===action.payload)
                {
                    state.task[i].status=false;
                }
            }
        }
    }
});
export const {addTask,recDel,recComplete}=todoslice.actions;
export default todoslice.reducer;