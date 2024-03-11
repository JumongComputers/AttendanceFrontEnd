'use client'
import React, {useState} from "react"
import { X } from "lucide-react";
import Modal from "react-modal";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { logInSchema } from "../utils/yupValidation";


interface LoginModalProps{
    isOpen: boolean,
    onRequestClose: () => void;

}



const LoginModal: React.FC<LoginModalProps> = ({isOpen, onRequestClose}) =>{



const router =useRouter();

if (!isOpen) return null

const handleClose = (e: React.MouseEvent<HTMLDivElement>) =>{
    if ((e.target as HTMLElement).id === "container") onRequestClose()
};

return(
            <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Login Modal"
            className="absolute top-1/2 left-1/2 z-20 transform overflow-y-auto -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-4 w-full h-[60vh] lg:h-[80vh] max-w-xl md:max-w-4xl"
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
            // dispatch()
            resetForm();
            
            }}
            >
                <Form>
                <div id="container" onClick={handleClose} className="fixed inset-0 flex items-center bg-black bg-opacity-50 justify-center z-20">
              <div className="bg-white w-full max-w-4xl rounded-md shadow-lg overflow-y-auto">
                <div className="flex justify-end pt-4 pr-4">
                  <button onClick={() => onRequestClose()}>
                    <X />
                  </button>
                </div>
                <div className="overflow-y-auto max-h-[520px]">
                  <div className="flex flex-col px-6 items-start w-full">
                    <div className="flex flex-col items-start lg:place-items-start w-full md:py-8 ">
                      <span className="text-[#19202C] text-4xl font-bold">Login Page</span>
                      <div className="w-full grid gap-4 lg:gap-6 mb-6 mt-12 ">
                        <div className="flex flex-col">
                          <label htmlFor="email" className="text-[#19202C] text-2xl mb-2">
                            Email:
                          </label>
                          <Field
                            name="email"
                            type="text"
                            className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                              placeholder-gray-200::placeholder placeholder-opacity-75
                              border-2 focus:border-[#0D60D8] text-xl"
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
                            className="py-4 px-6 rounded-md bg-[#F2F7FF] focus:outline-none w-full
                              placeholder-gray-200::placeholder placeholder-opacity-75
                              border-2 focus:border-[#0D60D8] text-xl"
                            placeholder="Enter your Password"
                          />
                          <ErrorMessage name="password" component="div" className="text-red-600" />
                        </div>
                       
                        <div className="flex justify-between items-center pt-8">
                          <button
                            onClick={() => onRequestClose()}
                            className="border border-[#0D60D8] py-4 text-[#0D60D8] rounded-md
                              font-bold text-2xl focus:outline-none px-12 bg-white"
                          >
                            Cancel
                          </button>
                          <button type="submit" className="bg-[#0D60D8] py-4 text-white rounded-md font-bold text-2xl px-6 focus:outline-none">
                            {/* {isLoading === "pending" ? "Loading..." : "Book Restaurant"} */}
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


export default LoginModal