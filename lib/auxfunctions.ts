import { useEffect } from "react"
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { signInDisplay, codeDisplay, headerNavDisplay, headerSignDisplay, token, loadingDisplay, loadingCodeDisplay, loadingUserDataDisplay, AlertUserDataDisplay } from "lib/atoms"
import { usePatchMe } from "./hooks";

export function useEffectEmail(fetchHook){
    const seterSignIn = useSetRecoilState(signInDisplay);
    const seterCode = useSetRecoilState(codeDisplay);
    const setloadingDisplay = useSetRecoilState(loadingDisplay)

    useEffect(()=>{
        if(fetchHook != undefined){
          seterSignIn("none")
          setloadingDisplay("none") 
          seterCode("flex")
        } 
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[fetchHook])
}
export function useEffectCode(fetchHook, closeSignIn){
    const seterDisplayHeaderSign = useSetRecoilState(headerSignDisplay);
    const seterDisplayHeaderNav = useSetRecoilState(headerNavDisplay);
    const setloadingDisplay = useSetRecoilState(loadingCodeDisplay)

    const seterToken = useSetRecoilState(token)

  useEffect(()=>{
    if(fetchHook != undefined){
      closeSignIn()
      seterDisplayHeaderSign("none")
      setloadingDisplay("none")
      seterDisplayHeaderNav("flex")
      seterToken(fetchHook.token)
    } 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[fetchHook])
}

export function usePatchUserData (newData, oldData){
  
  const getToken = useRecoilValue(token);
  const setUserDataDisplay = useSetRecoilState(loadingUserDataDisplay)
  const setAlertUserDataDisplay = useSetRecoilState(AlertUserDataDisplay)
  
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

  if(result?.data?.message){
    setUserDataDisplay("none")
    setAlertUserDataDisplay("flex")
    setTimeout(()=>{
      setAlertUserDataDisplay("none")
    }, 4000)
  }
  

  return {result, newData}
  
  
}