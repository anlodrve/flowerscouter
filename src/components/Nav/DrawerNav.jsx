//mui imports 
import {Drawer, Box, Typography, IconButton} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'

//font
import "/Users/andrealove/Documents/PrimeAcademy/Tier3/Solo Project/flowerscouter/src/fonts/Angel-Lemona_Demo.ttf"

//react imports 
import React, { useState  } from "react";
import { Link } from 'react-router-dom';

import LogOutButton from '../LogOutButton/LogOutButton';

import { useSelector } from 'react-redux';

function DrawerNav() {
    const user = useSelector((store) => store.user);

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
                <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/home">
              Home
            </Link>

            <Link className="navLink" to="/user">
              User Page
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}
      </div>
            </Drawer>
        </>
    )
}

export default DrawerNav; 