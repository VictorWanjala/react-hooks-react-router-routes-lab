import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return <div>(
    <NavBar/>
    <Switch>
    <Route path="/movies" component={Movies}/>
    <Route path="/movies" component={Home}/>

    <Route path="/movies" component={Actors}/>

    <Route path="/movies" component={Directors}/>



    </Switch>
    )</div>;
}

export default App;
