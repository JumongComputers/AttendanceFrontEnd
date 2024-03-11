import { SigninType } from '@/app/utils/types'

import axios from "axios";

const baseApi = process.env.NEXT_PUBLIC_BASE_API;


// The service is written in an object

const loginService = {
    login: async (loginData: SigninType): Promise<SigninType> => {
      try {
      const response = await axios.post(`${baseApi}/users/signin`, loginData);
      console.log(response, "working well");
  
      const accessToken = response.data.data.data.accessToken;
      localStorage.setItem("accessToken", accessToken);
      sessionStorage.setItem("firstName", response.data.data.data.firstName);
      sessionStorage.setItem("role", response.data.data.data.role);

      return response.data;
      } catch (error:any) {
        throw new Error(`Login failed: ${error.message}`);
      }
    },


};

export default loginService;