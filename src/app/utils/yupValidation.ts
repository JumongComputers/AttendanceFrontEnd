// import { Yup } from 'yup';

import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    age: Yup.number().required("Age is required").positive("Age must be positive"),
    address: Yup.object().shape({
        houseNumber: Yup.string().required('House number is required'),
        street: Yup.string().required('Street is required'),
        city: Yup.string().required('City is required'),
        state: Yup.string().required('State is required'),
        country: Yup.string().required('Country is required'),
    }),
    telephone: Yup.string().matches(/^\d{10}$/, "Invalid phone").required("Phone number is required"),
    role: Yup.string().oneOf(['parent', 'pupils', 'staffs','admin']).required("Role is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
})

export const logInSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required")
})