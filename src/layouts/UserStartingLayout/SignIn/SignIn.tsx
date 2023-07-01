import { Portrait, PortraitOutlined } from "@mui/icons-material";
import { Grid, Slide } from "@mui/material";
import { Account } from "../../../models/Account";
import nameof from "../../../utils";
import { useForm } from "react-hook-form";
import "./SignIn.scss";
import resource from "../../../resource/resource";

const onFormSubmit = (data: any) => console.log(data);
const onErrors = (errors: any) => console.error(errors);
let nation = "vn"


export default function SignIn() {
  const { register, handleSubmit } = useForm();

  return (
    <Slide in={true} direction="left" mountOnEnter unmountOnExit>
      <form onSubmit={handleSubmit(onFormSubmit, onErrors)} className="form-login">
          <Portrait sx={{fontSize: 100}} />
       <div className="container">
       <label className="form-login__label">
              {" "}
              {resource.vn.Username}
            </label>
            <input
              type="text"
              className="form-login__input"
              {...register(nameof<Account>("username"))}
            />
            <label> {resource.vn.Password} </label>
            <input
              type="password"
              className="form-login__input"
              {...register(nameof<Account>("password"))}
            />
       </div>
          <button type="submit">{SignIn.name}</button>
   
      </form>
    </Slide>
  );
}
