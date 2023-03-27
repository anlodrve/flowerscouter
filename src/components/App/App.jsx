import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

//styling
import { ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import "/Users/andrealove/Documents/PrimeAcademy/Tier3/Solo Project/flowerscouter/src/fonts/Angel-Lemona_Demo.ttf"
// import AppTheme from '../AppTheme/AppTheme';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import DrawerNav from '../Nav/DrawerNav';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AddSpot from '../AddSpot/AddSpot';
import AppBarNav from '../Nav/AppBar';
import ListOfSpots from '../Spots/ListOfSpots';
import EditSpot from '../EditSpot/EditSpot';
import UserPage from '../UserPage/UserPage';
import MainPage from '../MainPage/MainPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';


function App() {

  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#cb6700',
        contrastText: '#ffe2ba',
        light: '#e6913b',
      },
      secondary: {
        main: '#d20353',
        contrastText: '#fbe3e3',
      },
      background: {
        default: '#ffabc1',
        paper: '#ffe6e8',
      },
      text: {
        primary: '#b7094e',
        disabled: 'rgba(94,94,94,0.6)',
        secondary: 'rgba(57,3,121,0.96)',
        hint: '#421292',
      },
      error: {
        main: '#b71c1c',
      },
      info: {
        main: '#26a69a',
      },
      success: {
        main: '#9ccc65',
      },
      warning: {
        main: '#15ed02',
      },
      divider: '#00695c',
    },
    typography: {
      fontFamily: 'Mulish',
      fontWeightRegular: 500,
    },
  
})


const dispatch = useDispatch();

const user = useSelector(store => store.user);

useEffect(() => {
  dispatch({ type: 'FETCH_USER' });
}, [dispatch]);

return (
  <ThemeProvider theme={theme}>
    <Router>
      <div>
        <AppBarNav />
        <DrawerNav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows MainPage else shows LoginPage
            exact
            path="/home"
          >
            <MainPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows AddSpot else shows LoginPage
            exact
            path="/add"
          >
            <AddSpot />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows ListOfSpots else shows LoginPage
            exact
            path="/list"
          >
            <ListOfSpots />
          </ProtectedRoute>

          <ProtectedRoute
            //logged in shows edit page, passing id as a parameter, else shows LoginPage
            exact
            path="/edit/:id"
          >
            <EditSpot />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/home" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404 Page Not Found</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  </ThemeProvider>
);
}

export default App;
