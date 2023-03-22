import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import spots from './spot.reducer';
import location from './location.reducer';
import categories from './categories.reducer';
import infoWindowReducer from './infowindow.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  spots, //all spots on the map
  location, //location data from LocationMap
  categories, //categories from database
  infoWindowReducer, //selected marker with infowindow
});

export default rootReducer;
