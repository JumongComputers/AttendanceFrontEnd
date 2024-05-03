// import { signUp } from './loginSlice';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import loginService from "../services/loginServices";
import { SigninType, SignupType } from "@/app/utils/types";
import { toast } from "react-toastify";
import { stat } from "fs";


export interface AuthState {
    userSign: SignupType | null;
    user: SigninType | null;
    loading: "idle" | "pending" | "succeeded" | "failed";
    error: string | null;
  }
  
  const initialState: AuthState = {
    userSign: null,
    user: null,
    loading: "idle",
    error: null,
  };



  // Async thunk for user login
export const signIn = createAsyncThunk("auth/signIn", async (loginData: SigninType, thunkAPI) => {
    try {
      console.log("Logging in with data:", loginData);
    //   The service object is called and the key of Login is reffered to
      const response = await loginService.login(loginData);
      console.log("Response from signIn:", response);
      return response;
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  });

export const signUp = createAsyncThunk("auth/signUp", async (signUpData: SignupType, thunkAPI) => {
  try {
    console.log("Signing up with data:", signUpData);
    const response = await loginService.signup(signUpData);
    return response;
    
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
})
  
  export const loginSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(signIn.pending, (state) => {
          state.loading = "pending";
        })
        .addCase(signIn.fulfilled, (state, action) => {
          state.loading = "succeeded";
          toast.done("login successful");
          state.user = action.payload;
        })
        .addCase(signIn.rejected, (state, action) => {
          state.loading = "failed";
          toast.error("login failed");
          state.error = action.error.message || null;
        })
        .addCase(signUp.pending, (state) => {
          state.loading = "pending";
        })
        .addCase(signUp.fulfilled, (state, action) => {
          state.loading = "succeeded";
          state.userSign = action.payload;
          toast.done("signup successful");
        })
        .addCase(signUp.rejected, (state, action) => {
          state.loading = "failed";
          toast.error("signup failed");
          state.error = action.error.message || null;
        })
    },
  });
  
  export default loginSlice.reducer;