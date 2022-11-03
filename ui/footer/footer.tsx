import { StyledContainerFooter } from "ui/container/container";
import { LogoWheat } from "ui/logo/logo";
import { Redes } from "ui/redes/redes";
import styled from "styled-components";
export const Footer = () => {
    return (
      <StyledContainerFooterResponsive>
        <LogoWheat></LogoWheat>
        <Redes></Redes>
      </StyledContainerFooterResponsive>
    );
  };

  const StyledContainerFooterResponsive = styled(StyledContainerFooter)`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
  `