import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useRecoilValue } from 'recoil';
import { AlertUserDataDisplay } from 'lib/atoms';

export default function SuccessAlert() {

    const displayAlert = useRecoilValue(AlertUserDataDisplay)

    console.log(displayAlert);
    
  return (
    <Stack sx={{ display:displayAlert, width: '100%' }} spacing={2}>
      <Alert severity="success">Datos modificados correctamente!</Alert>
    </Stack>
  );
}