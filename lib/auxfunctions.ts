import { useEffect } from "react"
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { signInDisplay, codeDisplay, headerNavDisplay, headerSignDisplay, token, userDataAtom } from "lib/atoms"
import { usePatchMe } from "./hooks";

export function useEffectEmail(fetchHook){
    const seterSignIn = useSetRecoilState(signInDisplay);
    const seterCode = useSetRecoilState(codeDisplay);

    useEffect(()=>{
        if(fetchHook != undefined){
          seterSignIn("none") 
          seterCode("flex")
        } 
      },[fetchHook])
}
export function useEffectCode(fetchHook, closeSignIn){
    const seterDisplayHeaderSign = useSetRecoilState(headerSignDisplay);
    const seterDisplayHeaderNav = useSetRecoilState(headerNavDisplay);

    const seterToken = useSetRecoilState(token)

  useEffect(()=>{
    if(fetchHook != undefined){
      closeSignIn()
      seterDisplayHeaderSign("none")
      seterDisplayHeaderNav("flex")
      seterToken(fetchHook.token)
    } 
  },[fetchHook])
}

export function usePatchUserData (newData, oldData){
  
  const getToken = useRecoilValue(token);
  
  if(newData.name == ""){
    newData.name = oldData.name
  }
  if(newData.address == ""){
    newData.address = oldData.address
  }
  if(newData.email == ""){
    newData.email = oldData.email
  }

  const result = usePatchMe(getToken, newData)

  return {result, newData}
  
  
}