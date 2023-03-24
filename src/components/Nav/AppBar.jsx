import { AppBar, Toolbar, Typography} from "@mui/material";

function AppBarNav() {

    return (
        <AppBar 
            position='static' 
            className="appbar" 
            >
            <Toolbar>
                <Typography 
                    variant='h3' 
                    component='div' 
                    fontFamily={'Angel'}
                    sx={{
                        mx:'auto',
                        mt: '5px'
                    }}>
                    Flower Scouter
                </Typography>
            </Toolbar>
        </AppBar>
    )

}

export default AppBarNav; 