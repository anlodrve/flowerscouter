//mui imports 
import { Drawer, Box, Typography, IconButton, Stack } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'

import './DrawerNav.css'

//font
import "../../fonts/Angel-Lemona_Demo.ttf"

//react imports 
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LogOutButton from '../LogOutButton/LogOutButton';

function DrawerNav() {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const [isDrawerOpen, setDrawerOpen] = useState(false)

    const handleLogout = () => {
        setDrawerOpen(false)
        dispatch({ type: 'LOGOUT' })
    }

    return (
        <>
            <IconButton 
                size='large' 
                edge='start' 
                color='inherit' 
                aria-label='logo' 
                onClick={() => setDrawerOpen(true)}
                sx={{
                    ml: '7px'
                }}>
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor='left'
                open={isDrawerOpen}
                onClose={() => setDrawerOpen(false)}>
                <Box p={2} width={250} textalign='center' role='presentation'>
                    <Typography variant='h5' component='div' fontFamily={'Angel'} sx={{fontSize:'27px'}}>
                        🌸 Flower Scouter 🌸
                    </Typography>
                </Box>

                <Stack spacing={2} direction='column'>

                    {/* If no user is logged in, show these links */}
                    {!user.id && (
                        // If there's no user, show login/registration links
                        <Link to="/login" onClick={() => setDrawerOpen(false)}>
                             🌺 Login / Register
                        </Link>
                    )}

                    {/* If a user is logged in, show these links */}
                    {user.id && (
                        <>
                            <Link 
                                to="/home" 
                                className="linkInDrawer"
                                onClick={() => setDrawerOpen(false)}
                                underline="none"
                               >
                                🌷 Home
                            </Link>

                            <Link 
                                to="/add" 
                                id='addLink'
                                className="linkInDrawer"
                                onClick={() => setDrawerOpen(false)}
                                underline="none"
                                >
                                🌼 Add a Spot!
                            </Link>

                            <Link 
                                to="/list" 
                                id='spotLink'
                                className="linkInDrawer"
                                onClick={() => setDrawerOpen(false)}
                                underline="none"
                               >
                                🌹 List of Spots
                            </Link>

                            <Link 
                                to="/user" 
                                className="linkInDrawer"
                                id='userLink'
                                onClick={() => setDrawerOpen(false)}
                                underline="none"
                               >
                                🌻 Your Spots
                            </Link>

                            <LogOutButton className="navLink" />

                        </>
                    )}
                </Stack>
            </Drawer>
        </>
    )
}

export default DrawerNav; 