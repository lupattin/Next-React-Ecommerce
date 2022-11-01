import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userDataAtom, loadingUserDataDisplay } from "lib/atoms";
import { usePatchUserData } from "lib/auxfunctions";
import { useEffect, useState } from "react";
import { LoadingUserData } from "ui/loading/loading";
import SuccessAlert from "ui/alerts/alerts";

export const UserDataForm = () => {

    const seter = useSetRecoilState(userDataAtom)

    const loadingSeter = useSetRecoilState(loadingUserDataDisplay)

    const { register, handleSubmit } = useForm();

    const [newUserData, setNewUserData] = useState({})

    const userData = useRecoilValue(userDataAtom) as any

    const result = usePatchUserData(newUserData, userData)

    useEffect(()=>{
      if(result?.result?.data?.message == 'User updated successfully'){
        seter(result.newData)
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [result])
    

    function formSubmit(data) {
      loadingSeter("flex")
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
          <LoadingUserData></LoadingUserData>
          <SuccessAlert></SuccessAlert>
        </div>
    </form>
    );
  };