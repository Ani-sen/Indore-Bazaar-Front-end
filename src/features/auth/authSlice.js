import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, register } from "./authService";


const userExist = JSON.parse(localStorage.getItem("user"))

const authSlice = createSlice({
    name : 'auth',
    initialState : {
        user : userExist || null,
        isLoading : false,
        isSucccess : false,
        isError : false,
        message: ""
    },
    reducers : {},
    extraReducers : (builder) => {

        builder
        .addCase(registerUser.pending , (state , action) => {
            state.isLoading = true
            state.isSucccess = false
            state.isError = false
        })
        .addCase(registerUser.fulfilled , (state , action) => {
            state.isLoading = false
            state.isSucccess = true
            state.isError = false
            state.user = action.payload
        })
        .addCase(registerUser.rejected , (state , action) => {
            state.isLoading = false
            state.isSucccess = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(loginUser.pending , (state , action) => {
            state.isLoading = true
            state.isSucccess = false
            state.isError = false
        })
        .addCase(loginUser.fulfilled , (state , action) => {
            state.isLoading = false
            state.isSucccess = true
            state.isError = false
            state.user = action.payload
        })
        .addCase(loginUser.rejected , (state , action) => {
            state.isLoading = false
            state.isSucccess = false
            state.isError = true
            state.message = action.payload
        })        
        .addCase(LogOutUser.fulfilled , (state , action) => {
            state.isLoading = false
            state.isSucccess = false
            state.isError = false
            state.message = ""
            state.user = null;
        })

    }
})

export default authSlice.reducer;


//register user

export const registerUser = createAsyncThunk(
    "AUTH/REGISTER",
    async(formData , thunkAPI)=>{
       try{
            return await register(formData)
       }catch(error){
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
       }
        
    }
)


//Login user

export const loginUser = createAsyncThunk(
    "AUTH/LOGIN",
    async(formData , thunkAPI)=>{
       try{
            return await login(formData)
       }catch(error){
        console.log(error)
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
       }
        
    }
)


//logout

export const LogOutUser = createAsyncThunk("AUTH/LOGOUT" , async() => {
    localStorage.removeItem("user");
})