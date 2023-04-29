import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Form from '../Components/Form';
import Footer from '../Components/Footer';

import React, { useState,  useReducer } from "react";
import { fetchAPI, submitAPI } from "../api/api"


import {
    Box,
    Heading,
    VStack,
} from "@chakra-ui/react";

import BookingForm from '../Components/Form';

export default function  Home(){
    const [date, setDate] = useState(new Date())
   // const navigate = useNavigate();
    const submitForm = formData => {
        const isSubmitted = submitAPI(formData);
    }

    const initializeTimes = d => {
        return fetchAPI(d)
    }

    const updateTimes = (state, action) => {
        const dateObj = new Date(action.new_date)
        return fetchAPI(dateObj)
    }
    const [    availableTimes,     dispatch  ] = useReducer(updateTimes,  initializeTimes(date));


    return(
        <>
         <Navbar/> 
         <div class="row"> 
         <div class="col-md-4"></div>
         <div class="col-md-4">
         <Form />
         </div>
        
        </div>
        <Footer />  

        </>
    )
} 

 