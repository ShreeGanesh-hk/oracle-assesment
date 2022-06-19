import { AppBar, Box, Grid, Toolbar, Typography } from '@mui/material';
import { useAppSelector } from '../../data-manage/hooks';


function ComponentBar() {   
    const {title} = useAppSelector(state => state.app)
    return (
        <Box >
            <AppBar position="relative" sx={{ backgroundColor: (theme) => theme.palette.secondary.main }}>
                <Grid container maxWidth="xl" sx={{m:'auto'}}>
                    <Toolbar variant="dense" sx={{ justifyContent: 'space-between',minHeight:'48px' }}>
                        <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1, textAlign: 'left', alignItems: 'center' }}>
                            {title}
                        </Typography>

                    </Toolbar>
                </Grid>
            </AppBar>
        </Box>
    )
}

export default ComponentBar