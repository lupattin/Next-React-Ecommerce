import { TextField } from "@mui/material";
import { StyledContainerSearcher } from "ui/container/container";

export const SearchBar = () => {
    return (
      <StyledContainerSearcher>
        <h2>Busca tu producto.</h2>
        <TextField fullWidth= {false} label="Buscar..." id="fullWidth" style={{width:"50vw"}}/>
      </StyledContainerSearcher>
    );
  };