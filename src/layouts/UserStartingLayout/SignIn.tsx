import {  PortraitOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Slide, TextField } from "@mui/material";
import { Account } from "../../models/Account";
import nameof from "../../utils";


const handleSubmit = ({username,password} : Account) =>{

}

const validateInput = ({username,password} : Account) => {

}

export default function SignIn() {

return (
<Slide in = {true} direction="left" mountOnEnter unmountOnExit >
<Box  display={"flex"} flexDirection={"column"} alignItems={"center"} mx={4} my={8}>
    <Avatar  component={PortraitOutlined}  sx={{m:1 }} />
    <Box component="form">
    <TextField  
    name={nameof<Account>('username')}
    label={nameof<Account>('username')}
    id={nameof<Account>('username')}
    fullWidth
    required
    autoFocus
    />

<TextField  
    name={nameof<Account>('password')}
    label={nameof<Account>('password')}
    id={nameof<Account>('password')}
    fullWidth
    required
    type="password"
    
    />
</Box>

<Button fullWidth type="submit" variant="contained" 
// sx={{backgroundColor: color => color.palette.mode === 'light' }} 
> 
{SignIn.name}
    </Button>
</Box>
</Slide>

)    


}