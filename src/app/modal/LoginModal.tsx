// 'use client'
import React, {useState} from "react"
import { X } from "lucide-react";
import Modal from "react-modal";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { logInSchema } from "../utils/yupValidation";
import {useSelector, useDispatch} from "react-redux";
import { signIn } from "../redux/slices/loginSlice";
import { SigninType } from "../utils/types";
import Link from "next/link";
// import { string } from "yup";

// import { Provider } from "react-redux";

interface LoginModalProps{
    isOpen: boolean,
    onRequestClose: () => void;

}



const LoginModal: React.FC<LoginModalProps> = ({isOpen, onRequestClose}) =>{

  const isLoading = useSelector((state: { auth: { loading: string } }) => state.auth.loading);
  const dispatch = useDispatch();

// const router =useRouter();

if (!isOpen) return null

const handleClose = (e: React.MouseEvent<HTMLDivElement>) =>{
    if ((e.target as HTMLElement).id === "container") onRequestClose()
};

return(
            <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Login Modal"
            className="absolute top-1/2 left-1/2 z-20 transform overflow-y-none -translate-x-1/2 -translate-y-1/2 rounded-lg bg-transparent p-4 w-5/6 h-[80vh] lg:h-[75vh] md:max-w-4xl md:w-2/3 lg:w-1/2"
            overlayClassName="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center"
            >
             
            <Formik
            initialValues={{
                email: "",
                password: ""
            }}
            validationSchema={logInSchema}
            onSubmit={(values: any, {resetForm}) =>{
            console.log("Form Submitted with values:", values);
            dispatch(signIn(values as SigninType) as any);
            resetForm();
            
            }}
            >
                <Form>
                <div id="container" onClick={handleClose} className="absolute flex inset-0  items-center w-full bg-black bg-opacity-0  z-20">
              <div className="bg-white  w-5/6 mx-auto rounded-md shadow-lg overflow-y-auto ">
                <div className="flex justify-end pt-4 pr-4">
                  <button onClick={() => onRequestClose()}>
                    <X />
                  </button>
                </div>
                <div className=" ">
                  <div className="flex flex-col px-2 items-start w-full">
                    <div className="flex flex-col items-start lg:place-items-start w-full md:py-8 ">
                      <span className="text-black text-4xl font-bold mx-auto ">Login Page</span>
                      <div className="w-full grid gap-4 lg:gap-6 mb-6 mt-12 ">
                        <div className="flex flex-col">
                          <label htmlFor="email" className="text-black text-2xl mb-2">
                            Email:
                          </label>
                          <Field
                            name="email"
                            type="text"
                            className="py-2 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                              placeholder-gray-200::placeholder placeholder-opacity-75
                              border-2 focus:border-black text-l"
                            placeholder="Enter your Email"
                          />
                          <ErrorMessage name="email" component="div" className="text-red-600" />
                        </div>
                        <div className="flex flex-col w-full">
                          <label htmlFor="password" className="text-[#19202C] text-2xl mb-2">
                            Password:
                          </label>
                          <Field
                            name="password"
                            type="text"
                            className="py-2 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                              placeholder-gray-200::placeholder placeholder-opacity-75
                              border-2 focus:border-black text-l"
                            placeholder="Enter your Password"
                          />
                          <ErrorMessage name="password" component="div" className="text-red-600" />
                        </div>
                       <p><Link href='#' className="text-blue-500 hover:text-red-500">Click here to register</Link> if you dont have an account</p>
                        <div className="flex justify-between items-center pt-8">
                          <button
                            onClick={() => onRequestClose()}
                            className="bg-transparent border border-black  py-1 text-black rounded-md
                              font-bold text-2xl focus:outline-none px-2 md:px-8 lg:px-10"
                          >
                            Cancel
                          </button>
                          <button type="submit" className="bg-black border border-transparent py-1 text-white rounded-md font-bold text-2xl px-2 focus:outline-none md:px-8 lg:px-10">
                            {isLoading === "pending" ? "Loading..." : "Login"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                </Form>

            </Formik>



            </Modal>
        )

        
    
    
    


}


export default LoginModal;