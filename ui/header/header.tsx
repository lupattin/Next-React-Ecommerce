import { Logo } from "ui/logo/logo";
import { Menu } from "ui/menu/menu";
import { Navbar } from "ui/navbar/navbar";
import {StyledContainerHeader} from "ui/container/container"
export const Header = () => {
    return (
      <StyledContainerHeader> 
        <Navbar></Navbar>
        <Logo></Logo>
        <Menu></Menu>
      </StyledContainerHeader>
    );
  };