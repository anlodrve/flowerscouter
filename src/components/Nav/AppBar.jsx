import { AppBar, Toolbar, Typography} from "@mui/material";

function AppBarNav() {

    return (
        <AppBar position='static' className="appbar">
            <Toolbar>
                <Typography variant='h4' component='div' fontFamily={'Angel'}>
                    Flower Scouter
                </Typography>
            </Toolbar>
        </AppBar>
    )

}

export default AppBarNav; 