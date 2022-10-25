import { Logo } from "ui/logo/logo";
import { SignIn } from "ui/signin/signin";
import {StyledContainerHeader} from "ui/container/container"
export const Header = () => {
    return (
      <StyledContainerHeader> 
        <SignIn></SignIn>
        <Logo></Logo>
      </StyledContainerHeader>
    );
  };