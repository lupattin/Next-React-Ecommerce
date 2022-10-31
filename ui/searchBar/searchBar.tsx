import { TextField } from "@mui/material";
import { StyledContainerSearcher } from "ui/container/container";
import { useRouter } from "next/router";

export const SearchBar = () => {

  const router = useRouter()

  function handleSubmit(e){
    
    if(e.keyCode == 13){
      router.push("/products/" + e.target.value)
    }
    
  }
    return (
      <StyledContainerSearcher>
        <h2>Busca tu producto.</h2>
        <TextField onKeyDown={handleSubmit} fullWidth= {false} label="Buscar..." id="fullWidth" style={{width:"50vw"}}/>
      </StyledContainerSearcher>
    );
  };