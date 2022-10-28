import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { useAuth, useCode } from "lib/hooks";
import { useState} from "react";
import { useRecoilState } from 'recoil'
import { signInDisplay, codeDisplay} from "lib/atoms"
import { useEffectEmail, useEffectCode } from "lib/auxfunctions";


export const SignInForm = ({closeSignIn}) => {
  const { register, handleSubmit } = useForm();

  const displaySignIn = useRecoilState(signInDisplay) as any;
  const displayCode = useRecoilState(codeDisplay) as any;

  /* Show and disable the email form for sending the code */
  const [email, setEmail] = useState("");
  const isCodeSended = useAuth(email);
  
  useEffectEmail(isCodeSended.data)
  
  
  /* and here is the Show and disable the code form for checking the code */
  const [code, setCode] = useState("");
  const authCode = useCode(email, code);
  
  useEffectCode(authCode.data, closeSignIn)

  /* The two handlers for the two forms */
  
  function formSubmit(data) {

    setEmail(data.email);
  }

  function sendCode(data){
    setCode(data.code);
    
  }
  return (
    <div style={{ width: "100%", display:"flex", flexDirection: "column" }}>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div style={{display:displaySignIn[0], flexDirection: "column"}}>
          <TextField
            size="medium"
            style={{ margin: "25px 0 5px" }}
            required
            id="outlined-required"
            label="Email"
            {...register("email")}
          />
          <Button variant="contained" type="submit">
            Enviar
          </Button>
        </div>
    </form>
    <form onSubmit={handleSubmit(sendCode)}>
        <div style={{display:displayCode[0], flexDirection: "column"}}>
          <TextField
            size="medium"
            style={{ margin: "25px 0 5px" }}
            required
            id="outlined-required"
            label="Codigo"
            {...register("code")}
          />
          <Button variant="contained" type="submit">
            Ingresar
          </Button>
        </div>
      </form>
    </div>
  );
};
