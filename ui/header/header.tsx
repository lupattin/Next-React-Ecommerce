import { Logo } from "ui/logo/logo";
import { SignIn } from "ui/signin/signin";
import { Navbar } from "ui/navbar/navbar";
import { HelloUser } from "ui/navbar/hellouser";
import {StyledContainerHeader} from "ui/container/container"
import { useRecoilState } from 'recoil'
import { headerNavDisplay, headerSignDisplay } from "lib/atoms"


export const Header = () => {

  const displayNavBar = useRecoilState(headerNavDisplay)
  const displaySign = useRecoilState(headerSignDisplay)
  
  
    return (
      <StyledContainerHeader>
        <Navbar displayNavbar={displayNavBar}></Navbar> 
        <SignIn displaySignIn={displaySign}></SignIn>
        <HelloUser displayHello={displayNavBar}></HelloUser>
        <Logo></Logo>
      </StyledContainerHeader>
    );
  };