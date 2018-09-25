import React from 'react';
import { Route, Switch } from 'react-router-dom';





import Main from './pages/main';
import FlightList from './pages/main/FlightList'




export default () => (
  <Switch>
   
    <Main>
       <Route path="/" component={FlightList}/>
     
    </Main>
  </Switch>
);


