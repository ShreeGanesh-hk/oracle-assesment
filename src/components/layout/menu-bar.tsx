import { Button, Grid, Link, Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ComponentBar from './component-bar';


export default function MenuBar() {
  // const dispatch = useAppDispatch();
  // const navigate = useNavigate();


  // const handleLogout = () => {
  //   let user = {
  //     loggedIn: false,
  //     user: "",
  //   } as ILogin
  //   dispatch(setLogin(user));
  //   navigate('/');
  // }


  return (
    <Box>
      <AppBar position="fixed">

        <Grid container sx={{ m: 'auto' }} maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', width: '100%' }} >
            <Typography variant="h5" href="/" component="a" sx={{ flexGrow: 1, textAlign: 'left', alignItems: 'center', color: "inherit", textDecoration: 'none' }}>
              Demo Streaming
            </Typography>
            <Stack spacing={4} direction="row" justifyContent="flex-end" alignItems='center'>
              <Link sx={{
                color: '#fff',
                alignItems: 'center',
              }} href="/login">Login</Link>
              <Button variant="contained" color="secondary" sx={{
                backgroundColor: 'secondary',
                color: '#fff'
              }}>Start your free trial</Button>
            </Stack>
          </Toolbar>
        </Grid>
        <ComponentBar />
      </AppBar>
      {/*  */}
    </Box>
  );
}
