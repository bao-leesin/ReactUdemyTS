import {  PortraitOutlined } from "@mui/icons-material";
import {  Box, Slide } from "@mui/material";
import { Account } from "../../../models/Account";
import nameof from "../../../utils";
import { useForm } from "react-hook-form";




const onFormSubmit  = (data: any) => console.log(data);
const onErrors = (errors: any) => console.error(errors);

export default function SignIn() {
    const{register,handleSubmit} = useForm()
    
return (
<Slide in = {true} direction="left" mountOnEnter unmountOnExit >
<Box  display={"flex"} flexDirection={"column"} alignItems={"center"} marginLeft={4} marginRight={4} my={8}>
    <PortraitOutlined />
    <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
    <input  
    type="password" className=""
    {...register(nameof<Account>('password'))}
    />

<input  
    type="password" className=""
    {...register(nameof<Account>('password'))}
    />
<button type="submit" >{SignIn.name}</button>
</form>


</Box>
</Slide>

)    


}