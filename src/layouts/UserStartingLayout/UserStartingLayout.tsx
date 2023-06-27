import { Grid, Slide, ThemeProvider, createTheme } from "@mui/material";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const isLogin = true;

export default function UserStartingLayout() {
    return(
        // <ThemeProvider theme={createTheme()}>
        <Grid container sx={{ height: '100vh' }} >
        <Grid  item xs={false} sm={4} md={6} lg={8} xl={9} sx={
        {backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
     }/>  
        <Grid item  xs={12} sm={8} md={6} lg={4} xl={3} 
        component={isLogin ? SignIn : SignUp}> 
      
        </Grid>
        </Grid>
        // </ThemeProvider>
   
    );
}