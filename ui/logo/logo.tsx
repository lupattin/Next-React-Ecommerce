import styled from "styled-components"
import LogoImage from "images/logo.svg"
import InstaLogo from "images/instagram.svg"
import InstaFace from "images/facebook.svg"
import InstaTwitter from "images/twitter.svg"

export const Logo = () => {
    return (
      <LogoImage></LogoImage>
    );
  };
export const LogoWheat = styled(LogoImage)`
      fill: wheat
`
export const LogoInsta = styled(InstaLogo)`
      fill: wheat
`
export const LogoFace = styled(InstaFace)`
      fill: wheat
`
export const LogoTwitter = styled(InstaTwitter)`
      fill: wheat
`
