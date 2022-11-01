import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useRecoilValue } from 'recoil';
import { loadingDisplay, loadingCodeDisplay, loadingUserDataDisplay } from 'lib/atoms';

export const Loading = () => {
    const displayLoading = useRecoilValue(loadingDisplay)
    
    return (
        <Box sx={{ display: displayLoading, justifyContent:"center", marginTop:"5px" }}>
            <CircularProgress />
        </Box>
    );
  };
export const LoadingCode = () => {
    const displayLoading = useRecoilValue(loadingCodeDisplay)
    
    return (
        <Box sx={{ display: displayLoading, justifyContent:"center", marginTop:"5px" }}>
            <CircularProgress />
        </Box>
    );
  };
export const LoadingUserData = () => {
    const displayLoading = useRecoilValue(loadingUserDataDisplay)
    
    return (
        <Box sx={{ display: displayLoading, justifyContent:"center", marginTop:"5px" }}>
            <CircularProgress />
        </Box>
    );
  };
