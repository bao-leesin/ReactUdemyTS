import { Facebook, Google, Portrait } from "@mui/icons-material";
import { Slide } from "@mui/material";
import nameof from "~/utils/module/nameof";
import { useForm } from "react-hook-form";
import "./SignIn.scss";
import { LabelResource, PlaceHolderResource } from "~/utils/resource";
import { useEffect } from "react";
import { Account } from "~/models";


const onFormSubmit = (data: any) => console.log(data);
const onErrors = (errors: any) => console.error(errors);

export default function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm({ criteriaMode: 'firstError' });

  return (
    <Slide in={true} direction="left" mountOnEnter unmountOnExit>
      <form
        onSubmit={handleSubmit(onFormSubmit, onErrors)}
        className="form-login"
      >
        <Portrait sx={{ fontSize: 100, color: " #FFC7C7" }} />
        <div className="container__input_login">
          {/* <label className="form-login__label"> {LabelResource.Username}</label> */}
          <input
            title={LabelResource.Username}
            type="text"
            className="form-login__input"
            placeholder={PlaceHolderResource.PleaseEnterUsername}
            {...register(nameof<Account>("username"), { required: "sfb", minLength: { value: 8, message: "dai hon" }, maxLength: { value: 16, message: "ngan hon" } })}
            autoFocus={true}
          />
          <p>{errors.username?.message?.toString()}</p>
          <input
            className="form-login__input"
            type="password"
            placeholder={PlaceHolderResource.PleaseEnterPassword}
            {...register(nameof<Account>("password"), { required: "sfb", minLength: { value: 8, message: "dai hon" }, maxLength: { value: 16, message: "ngan hon" } })}
          />
          <p>{errors.username?.message?.toString()}</p>
        </div>
        <div className="RememberMeCheckbox">
          <input type="checkbox"></input>
          <label>{LabelResource.RememberMe}</label>
        </div>
        <div className="LinkInLoginForm">
          <a className="ForgotPasswordLink" href="#">
            {LabelResource.ForgotPasswordLink}
          </a>
          <a className="SignUpLink" href="#">
            {LabelResource.SignUpLink}
          </a>
        </div>
        <button type="submit" className="form-login__btn_login">{LabelResource.Login}</button>

        <div className="IconInFormLogin">
          <a href="#" className="SignInByFacebookLink">

            <Facebook
              color="info"
              fontSize="large"
            />
          </a>
          <a href="#" className="SignInByGoogleLink">

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




