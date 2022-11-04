import styled from "styled-components";
import LogoImage from "images/logo.svg";
import InstaLogo from "images/instagram.svg";
import InstaFace from "images/facebook.svg";
import InstaTwitter from "images/twitter.svg";
import { useRouter } from "next/router";

export const Logo = () => {
  const router = useRouter();

  function handleClick() {
    router.push("/");
  }

  return <LogoHeaderResponsive onClick={handleClick}></LogoHeaderResponsive>;
};
export const LogoWheat = styled(LogoImage)`
  fill: wheat;
`;
export const LogoHeaderResponsive = styled(LogoImage)`
  @media (max-width: 768px) {
    width: 150px;
  }
`;
export const LogoInsta = styled(InstaLogo)`
  fill: wheat;
`;
export const LogoFace = styled(InstaFace)`
  fill: wheat;
`;
export const LogoTwitter = styled(InstaTwitter)`
  fill: wheat;
`;
