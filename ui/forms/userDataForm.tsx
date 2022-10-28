import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userDataAtom } from "lib/atoms";
import { usePatchUserData } from "lib/auxfunctions";
import { useEffect, useState } from "react";
export const UserDataForm = () => {

    const seter = useSetRecoilState(userDataAtom)

    const { register, handleSubmit } = useForm();

    const [newUserData, setNewUserData] = useState({})

    const userData = useRecoilValue(userDataAtom) as any

    const result = usePatchUserData(newUserData, userData)

    useEffect(()=>{
      if(result?.result?.data?.message == 'User updated successfully'){
        seter(result.newData)
      }
    }, [result])
    

    function formSubmit(data) {
      
      setNewUserData(data)
      
    }

    return (
    <form onSubmit={handleSubmit(formSubmit)} style={{width:"100%"}}>
        <div style={{display:"flex", flexDirection: "column"}}>
          <TextField
            size="medium"
            style={{ margin: "25px 0 5px" }}
            id="outlined-required"
            label="Nombre"
            defaultValue= {userData.name}
            {...register("name")}
          />
        </div>
        <div style={{display:"flex", flexDirection: "column"}}>
          <TextField
            size="medium"
            style={{ margin: "25px 0 5px" }}
            id="outlined-required"
            label="Domicilio"
            defaultValue={userData.address}
            {...register("address")}
          />
        </div>
        <div style={{display:"flex", flexDirection: "column"}}>
          <TextField
            size="medium"
            style={{ margin: "25px 0 5px" }}
            id="outlined-required"
            label="Email"
            defaultValue={userData.email}
            {...register("email")}
          />
          <Button style={{marginTop:"20px"}} variant="contained" type="submit">
            Modificar
          </Button>
        </div>
    </form>
    );
  };