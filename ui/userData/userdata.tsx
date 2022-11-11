import { useState } from "react";
import { Button } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { UserDataForm } from "ui/forms/userDataForm";
import { useRouter } from "next/router";

export const UserData = () => {
    
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const router = useRouter()

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
      
      <div style={{display:"flex", alignItems:"center"}}>  
        <Button onClick={()=>{ router.push("/")}} style={{margin:"5px"}} variant="contained">Inicio</Button>
        <Button style={{margin:"5px"}} onClick={handleOpen} variant="contained">Mis Datos</Button>
        <Button style={{margin:"5px"}} onClick={()=>{window.scrollTo(0, document. body. scrollHeight)}} variant="contained">Contacto</Button>
        <Modal open={open} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }}>
          <Fade in={open}>
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2" style={{color:"black"}}>
                Tus Datos
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{color:"black"}}> 
                 Aquí podras modificar tus datos.
              </Typography>
              <UserDataForm></UserDataForm>
            </Box>
          </Fade>
        </Modal>
      </div>
    );
  };