import { Grid, Link, Stack } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GooglePlay from '../../assets/images/GooglePlay.png';
import AppleStore from '../../assets/images/AppStore.svg';
import MicrosoftStore from '../../assets/images/MicrosoftStore.png';

type ImageLinkType = {
    src :string,
    href:string,
    width:number,
    height:number
}

function ImageLink({src,href,width,height}:ImageLinkType){
    return(
        <Link sx={(theme) => ({
            height:theme.spacing(2 * width),
            width:theme.spacing(2 * height)
        })} component='img' href={href} src={src} />
        
    )
}

export default function FooterApps() {
    return (
        <Grid container sx={{mt:3}}>
            <Grid item lg={6} md={6} sm={6} >
                <Stack justifyContent="flex-start" direction="row" spacing={2} alignItems="center" alignSelf="center">
                    <FacebookIcon fontSize='large'/>
                    <InstagramIcon fontSize='large' />
                    <TwitterIcon fontSize='large' />
                </Stack>
            </Grid>
            <Grid item lg={6} md={6} sm={6} >
                <Stack justifyContent="flex-end" direction="row" spacing={2} alignItems="center">
                    <ImageLink href="/" src={GooglePlay} width={3} height={7} />
                    <ImageLink href="/"src={AppleStore} width={2} height={6} />
                    <ImageLink href="/"src={MicrosoftStore} width={2} height={6} />                  
                </Stack>
            </Grid>


        </Grid>
    )
}
