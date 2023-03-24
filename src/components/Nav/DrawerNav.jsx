import {Drawer, Box, Typography, IconButton} from "@mui/material"
import { useState  } from "react"
import MenuIcon from '@mui/icons-material/Menu'

import "/Users/andrealove/Documents/PrimeAcademy/Tier3/Solo Project/flowerscouter/src/fonts/Angel-Lemona_Demo.ttf"

function DrawerNav() {

    const [isDrawerOpen, setDrawerOpen] = useState(false)
    return(
        <>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={() => setDrawerOpen(true)}>
                <MenuIcon /> 
            </IconButton>
            <Drawer 
                anchor='left' 
                open={isDrawerOpen} 
                onClose={() => setDrawerOpen(false) }>
                <Box p={2} width={250} textalign='center' role='presentation'>
                    <Typography variant='h6' component='div' fontFamily={'Angel'}>
                    🌸 Flower Scouter 🌸
                    </Typography>
                </Box>
            </Drawer>
        </>
    )
}

export default DrawerNav; 