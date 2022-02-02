import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';
import UserSignUp from './components/UserSignUp';
import UserSignIn from './components/UserSignIn';
import UserSignOut from './components/UserSignOut';

function App() {
  return (
    <React.Fragment>
    <Header />
      <Routes>
        <Route exact path='/' element={<Courses />}/>
        <Route path='/courses/:id' element={<CourseDetail />}/>
        <Route path='/courses/create' element={<CreateCourse />}/>
        <Route path='/courses/:id/update' element={<UpdateCourse />}/>
        <Route path='/signin' element={<UserSignIn />}/>
        <Route path='signout' element={<UserSignOut/>}/>
        <Route path ='/signup' element={<UserSignUp/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
