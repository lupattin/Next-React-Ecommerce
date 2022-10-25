import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { useAuth, useCode } from "lib/hooks";
import { useEffect, useState} from "react";
import { useSetRecoilState, useRecoilState } from 'recoil'
import { signInDisplay, codeDisplay } from "lib/atoms"


export const SignInForm = ({closeSignIn}) => {
  const { register, handleSubmit } = useForm();

  const seterSignIn = useSetRecoilState(signInDisplay);
  const seterCode = useSetRecoilState(codeDisplay);

  const displaySignIn = useRecoilState(signInDisplay) as any;
  const displayCode = useRecoilState(codeDisplay) as any;
  
  const [email, setEmail] = useState("");
  const isCodeSended = useAuth(email);
  
  useEffect(()=>{
    if(isCodeSended.data != undefined){
      seterSignIn("none") 
      seterCode("flex")
    } 
  },[isCodeSended.data])
  
  function formSubmit(data) {

    setEmail(data.email);
  }

  const [code, setCode] = useState("");
  const authCode = useCode(email, code);
  console.log(authCode);

  useEffect(()=>{
    if(isCodeSended.data != undefined){
      closeSignIn()
    } 
  },[authCode.data])
  
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
            defaultValue="****@email.com"
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
            label="Code"
            defaultValue="Tu Codigo"
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
