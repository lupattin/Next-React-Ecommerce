import { TextField } from "@mui/material";
import { StyledContainerSearcher } from "ui/container/container";
import { useRouter } from "next/router";
import styled from 'styled-components';
export const SearchBar = () => {

  const router = useRouter()

  function handleSubmit(e){
    
    if(e.keyCode == 13){
      router.push("/products/" + e.target.value)
    }
    
  }
    return (
      <StyledContainerSearcher>
        <h2 style={{textAlign:"center", color:"black"}}>Busca tu producto.</h2>
        <ResponsiveTextField onKeyDown={handleSubmit} fullWidth= {false} label="Buscar..." id="fullWidth"/>
      </StyledContainerSearcher>
    );
  };

  const ResponsiveTextField = styled(TextField)`

    width:50vw;
  @media (max-width: 768px) {
    width:70vw;
  }
  `
