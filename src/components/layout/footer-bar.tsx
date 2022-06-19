import { Box, Container, Link, Typography } from '@mui/material';
import React from 'react'
import FooterApps from './footer-apps';
import FooterLinks from './footer-links';





function Copyright() {
    return (
        <Typography variant="body2" color="inherit" sx={{ margin: (theme) => theme.spacing(1, 'auto') }}>
            {'Copyright © '}
            {new Date().getFullYear()}
            {' '}
            <Link color="inherit" href="/">
                Demo Streaming
            </Link>{' '}
            {'. All Rights Reserved'}
        </Typography>
    );
}

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                pt:2,
                pb:1,
                px:2,               
                mt: 'auto',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[900],
                color: (theme) =>
                    theme.palette.mode === 'dark'
                        ? theme.palette.grey[900]
                        : theme.palette.grey[500],
            }}
        >
            <Container maxWidth='xl'>
                <FooterLinks />
                <Copyright />
                <FooterApps />
            </Container>
        </Box>
    )
}

export default Footer