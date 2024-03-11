export interface SigninType{
    emai: string,
    password: string
}

export interface SignupType{
    firstName: string;
  lastName: string;
  age: number;
  address: {
    houseNumber: string;
    street: string;
    city: string;
    state: string;
    country: string;
  },
  telephone: string;
  role: "parent" | "pupils" | "staffs";
  email: string;
  password: string;
  

}


export interface AuthState {
    user: any;
    loading: "idle" | "pending" | "succeeded" | "failed";
    error: string | null;
  }