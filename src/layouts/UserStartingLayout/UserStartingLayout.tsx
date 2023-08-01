import { Grid, ThemeProvider, createTheme } from "@mui/material";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp";
import { useTransition } from "react";

const isLogin = true;

export default function UserStartingLayout() {
    
    return(
        <ThemeProvider theme={createTheme()}>
        <Grid container sx={{ height: '100vh'  }} component={"main"} wrap="nowrap">
        <Grid  item xs={false}   md={7} sx={
        {backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}
    />  
        <Grid item xs={12}  md={5}
        component={isLogin ? SignIn : SignUp} /> 
        </Grid>
        </ThemeProvider>
   
    );
}