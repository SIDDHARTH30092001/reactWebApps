import {createSlice} from "@reduxjs/toolkit";
const initialState={
    status: false,
    userData:null
}

const authSlice=createSlice({
    name:"auth",
    initialState, //need to pass intial state
    reducers:{    //reducer is object
        //method dispatch
        login:(state,action)=>{//functions
            state.status=true;
            state.userData=action.payload.userData;
            },

        logout:(state)=>{
                state.status=false;
                state.userData=null;
            }
    }
    //actions are under reducers same in todoSlice
})
export const{login,logout}=authSlice.actions;
export default authSlice.reducer;