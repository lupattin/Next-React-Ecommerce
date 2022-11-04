import { Logo } from "ui/logo/logo";
import { SignIn } from "ui/signin/signin";
import { Navbar } from "ui/navbar/navbar";
import { HelloUser } from "ui/navbar/hellouser";
import {StyledContainerHeader} from "ui/container/container"
import { useRecoilState } from 'recoil'
import { headerNavDisplay, headerSignDisplay } from "lib/atoms"
import styled from "styled-components"


export const Header = () => {

  const displayNavBar = useRecoilState(headerNavDisplay)
  const displaySign = useRecoilState(headerSignDisplay)
  
  
    return (
      <StyledContainerHeaderResponsive>
        <Navbar displayNavbar={displayNavBar}></Navbar> 
        <SignIn displaySignIn={displaySign}></SignIn>
        <HelloUser displayHello={displayNavBar}></HelloUser>
        <Logo></Logo>
      </StyledContainerHeaderResponsive>
    );
  };

  const StyledContainerHeaderResponsive = styled(StyledContainerHeader)`
        @media (max-width: 768px) {
          display: flex;
          flex-direction: column-reverse;
          height:200px;
        }
  `  