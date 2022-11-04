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
  height: 100px;
  border-bottom: 1px solid #e0e0e0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    height:200px;
  }
`

const StyledContainerFooter = styled(MUIContainer)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgb(38 35 37);
  height: 40vh; 
`

const StyledContainerSearcher = styled(MUIContainer)`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 90px;
  flex-direction: column;
`

export {StyledContainerHeader, StyledContainerFooter, StyledContainerSearcher}