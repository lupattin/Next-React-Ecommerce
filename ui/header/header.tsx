import { Logo } from "ui/logo/logo";
import { Menu } from "ui/menu/menu";
import {StyledContainerHeader} from "ui/container/container"
export const Header = () => {
    return (
      <StyledContainerHeader> 
        <Menu></Menu>
        <Logo></Logo>
      </StyledContainerHeader>
    );
  };