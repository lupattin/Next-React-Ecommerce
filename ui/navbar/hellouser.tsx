import { useRecoilValue } from "recoil";
import { Link } from "@mui/material";
import { useSetRecoilState } from 'recoil'
import { headerNavDisplay, headerSignDisplay, signInDisplay, codeDisplay, userDataAtom, token } from "lib/atoms"


export const HelloUser = ({displayHello}) => {
    const useUserData = useRecoilValue(userDataAtom) as any;

    const seterDisplayHeaderSign = useSetRecoilState(headerSignDisplay);
    const seterDisplayHeaderNav = useSetRecoilState(headerNavDisplay);
    const seterDisplaySign = useSetRecoilState(signInDisplay);
    const seterDisplayCode = useSetRecoilState(codeDisplay);
    const seterToken = useSetRecoilState(token)
    

    function handleClick(){
      seterDisplayHeaderSign("flex")
      seterDisplayHeaderNav("none")
      seterDisplaySign("flex")
      seterDisplayCode("none")
      seterToken("")
    }
    
    return (
        <div style={{display:displayHello[0], flexDirection:"column", alignItems:"center"}}>
          <p style={{margin:"0"}}>¡Hola {useUserData?.name}!</p>
          <Link onClick={handleClick} underline="hover">Cerrar sesión</Link>
        </div>
    );
  };