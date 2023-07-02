import { Facebook, Google, Portrait } from "@mui/icons-material";
import { Slide } from "@mui/material";
import { Account } from "~/models/Account";
import nameof from "../../../utils";
import { useForm } from "react-hook-form";
import "./SignIn.scss";
import LabelResource from "~/utils/resource/Label";


const onFormSubmit = (data: any) => console.log(data);
const onErrors = (errors: any) => console.error(errors);

export default function SignIn() {
  const { register, handleSubmit } = useForm();

  return (
    <Slide in={true} direction="left" mountOnEnter unmountOnExit>
      <form
        onSubmit={handleSubmit(onFormSubmit, onErrors)}
        className="form-login"
      >
        <Portrait sx={{ fontSize: 100 }} />
        <div className="container">
          <label className="form-login__label"> {LabelResource.Username}</label>
          <input
            title={LabelResource.Username}
            type="text"
            className="form-login__input"
            placeholder={""}
            {...register(nameof<Account>("username"))}
            autoFocus
          />
          <label> {LabelResource.Password} </label>
          <input
            type="password"
            className="form-login__input"
            {...register(nameof<Account>("password"))}
          />
        </div>
        <div>
        <input type="checkbox"></input>
        <label>{LabelResource.RememberMe}</label>
        </div>
        <div className="LinkInLoginForm">
          <a className="ForgotPasswordLink" href="#">
            fffffffffffff
          </a>
          <a className="SignUpLink" href="#">
            sissssssssssssssssss
          </a>
        </div>
        <button type="submit">{SignIn.name}</button>
        <label>Or Sign In By</label>
        <div className="IconInFormLogin">
          <a href="#"   className="SignInByFacebookLink">
            {" "}
            <Facebook
            
              color="info"
              fontSize="large"
            />
          </a>
          <a href="#"  className="SignInByGoogleLink">
            {" "}
            <Google
             
              color="warning"
              fontSize="large"
            />
          </a>
        </div>
      </form>
    </Slide>
  );
}
