import React from 'react';
import CoursesList from './component/coursesList/CoursesList';
import { Route, Switch, Redirect } from 'react-router-dom';

import SavedList from './component/savedList/savedList';
import NavBar from './component/NavBar/NavBar';



const App= ()=> {
  return (
    <div>
      <NavBar />
      <Switch>
      <Route path="/home" exact component={CoursesList} />
      <Route path="/saved" exact component={SavedList}/>
      <Redirect from='/' to='home' />
      <Redirect  to='home' />
      </Switch>
    </div>
    
  );
}

export default App;
