import { Grid, Link } from "@mui/material";



export default function FooterLinks() {
    const footerLinks = ["Home", "Terms and Conditions", "Privacy Policy", "Collection Statement", "Help", "Manage Account"]
    return (
        <Grid container>
            {
                footerLinks.map((name, i) => {
                    return <Link key={i} variant="body2" sx={{
                        color: 'inherit',
                        borderRight: '1px solid',
                        borderColor: 'inherit',
                        px: 2,
                        '&:first-of-type': {
                            pl: 0,
                        },
                        '&:last-of-type': {
                            border: 'none',
                        },
                    }}>
                        {name}
                    </Link>
                })
            }

        </Grid>
    )
}