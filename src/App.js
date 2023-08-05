import React from 'react';
import Hero from './Components/Hero';
import { BrowserRouter as Router, Switch,Route} from "react-router-dom"; // Import BrowserRouter, Route, and Switch
import NavBar from './Components/NavBar';
import Home from './Components/Home'; // Import your components for each section
import RoomSuites from './Components/RoomSuites';
import RestaurantBar from './Components/RestaurantBar';
import Blog from './Components/Blog';
import Booking from './Components/Booking';

const App = () => {
    return (
      <>
        <Router>
          
            <NavBar />
         
            <Switch>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/room-suites" component={RoomSuites}></Route>
            <Route exact path="/restaurant-bar" component={RestaurantBar}></Route>
            <Route exact path="/blog" component={Blog}></Route>
            <Route exact path="/booking" component={Booking}></Route>
            </Switch>
          
        </Router>
        
        </>
    );
}

export default App;
