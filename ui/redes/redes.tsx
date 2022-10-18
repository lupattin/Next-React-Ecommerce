import { LogoInsta, LogoFace, LogoTwitter } from "ui/logo/logo";
export const Redes = () => {
    return (
      <div >
        <div style={{display:"flex", alignItems:"center", margin:"5px"}}>
            <LogoInsta/><a href="https://www.instagram.com/" style={{color:"wheat"}}>Instagram</a>
        </div>
        <div style={{display:"flex", alignItems:"center", margin:"5px"}}>
            <LogoFace/><a href="https://www.facebook.com/" style={{color:"wheat"}}>Facebook</a>
        </div>
        <div style={{display:"flex", alignItems:"center", margin:"5px"}}>
            <LogoTwitter/><a href="https://www.twitter.com/" style={{color:"wheat"}}>Twitter</a>
        </div>
      </div>
    );
  };