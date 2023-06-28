import {  PortraitOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Slide, TextField } from "@mui/material";
import { Account } from "../../models/Account";
import nameof from "../../utils";
import { useForm } from "react-hook-form";


const onFormSubmit  = (data: any) => console.log(data);
const onErrors = (errors: any) => console.error(errors);

export default function SignIn() {
    const{register,handleSubmit} = useForm()

return (
<Slide in = {true} direction="left" mountOnEnter unmountOnExit >
<Box  display={"flex"} flexDirection={"column"} alignItems={"center"} marginLeft={4} marginRight={4} my={8}>
    <Avatar  component={PortraitOutlined}  sx={{m:1 }} />
    <Box component="form" onSubmit={handleSubmit(onFormSubmit, onErrors)}>
    <TextField  
    label={nameof<Account>('username')}
    id={nameof<Account>('username')}
    fullWidth
    autoFocus
    margin={"normal"}
    {...register(nameof<Account>('username'))}
    />

<TextField  
    label={nameof<Account>('password')}
    id={nameof<Account>('password')}
    fullWidth
    type="password"
    margin={"normal"}
    {...register(nameof<Account>('password'))}
    />
    <Button fullWidth type="submit" variant="contained" 
// sx={{backgroundColor: color => color.palette.mode === 'light' }} 
> 
{SignIn.name}
    </Button>
</Box>


</Box>
</Slide>

)    


}