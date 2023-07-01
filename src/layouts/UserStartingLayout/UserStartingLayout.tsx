import { Grid, ThemeProvider, createTheme } from "@mui/material";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp";

const isLogin = true;

export default function UserStartingLayout() {
    return(
        <ThemeProvider theme={createTheme()}>
        <Grid container sx={{ height: '100vh'  }} component={"main"} wrap="nowrap" >
        <Grid  item xs={false} sm={4}  md={7} xl = {9} sx={
        {backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}
    />  
        <Grid item xs={12} sm={8} md={5} xl={3}
        component={isLogin ? SignIn : SignUp} /> 
        </Grid>
        </ThemeProvider>
   
    );
}