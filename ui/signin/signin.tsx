import { useState } from "react";
import { Button } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { SignInForm } from "ui/forms/signinform";
import styled from "styled-components"

export const SignIn = ({displaySignIn}) => {
    
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display:"flex",
    alignItems:"center",
    flexDirection: "column"
  };
  return (
      
      <div style={{display:displaySignIn[0]}}> 
        <Button onClick={handleOpen} variant="contained">Iniciar Sesión</Button>
        <Modal open={open} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }}>
          <Fade in={open}>
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2" style={{color:"black"}}>
                Iniciar Sesion
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{color:"black"}}>
                 Te enviaremos un codigo a tu mail para poder iniciar sesión. 
              </Typography>
              <SignInForm closeSignIn={handleClose}></SignInForm>
            </Box>
          </Fade>
        </Modal>
      </div>
    );
  };

  const ButtonResponsive = styled(Button)`
    
  `