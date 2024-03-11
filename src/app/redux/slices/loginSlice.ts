import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import loginService from "../services/loginServices";
import { SigninType } from "@/app/utils/types";
import { toast } from "react-toastify";


export interface AuthState {
    user: SigninType | null;
    loading: "idle" | "pending" | "succeeded" | "failed";
    error: string | null;
  }
  
  const initialState: AuthState = {
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
        });
    },
  });
  
  export default loginSlice.reducer;