import Container from '@mui/material/Container';
import styled from "styled-components"

function MUIContainer ({className, children}:any){
  return <Container maxWidth={false} className={className}>{children}</Container>
}
const StyledContainerHeader = styled(MUIContainer)`
  display:flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(244 235 240);
  height: 50px;
  border-bottom: 1px solid #e0e0e0;
`

const StyledContainerFooter = styled(MUIContainer)`
  background-color: rgb(38 35 37);
  height: 200px; 
`

export {StyledContainerHeader, StyledContainerFooter}