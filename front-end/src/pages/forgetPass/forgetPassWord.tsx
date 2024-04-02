import ResetNewPassword from "@/components/forgetPassword/ResetNewPassword";
import { Box } from "@mui/material";
import { useState } from "react";

export default function ForgetPassWord (){
    const [step,setStep]=useState(1)
    const nextStep =()=>{
        setStep(step+1)
    }
    const backStep =()=>{
        setStep(step+1)
    }
    return(<Box sx={{height:"60vh" , display:"flex", alignItems:"center", justifyContent:"center" }}>
    <ResetNewPassword></ResetNewPassword>
    </Box>)
}