import { UserData } from "ui/userData/userdata";
import { useMe } from "lib/hooks";
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { token, userDataAtom } from "lib/atoms";
import { useEffect } from "react";

export const Navbar = ({displayNavbar}) => {

  const seterUserData = useSetRecoilState(userDataAtom)
  const getToken = useRecoilValue(token);
    const userData = useMe(getToken) as any;
    
    useEffect(()=>{
      seterUserData(userData.data)
    },[userData])
    
  return (
      <div style={{display:displayNavbar[0], alignItems:"center"}}>  
            <UserData></UserData>
      </div>
    );
  };