import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddStudents from './components/AddStudents';
import ShowStudents from './components/ShowStudents';
function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
<Route path='/' element = {<Home/>}></Route>
<Route path='/add_students' element = {<AddStudents/>}></Route>
<Route path='/students_list' element = {<ShowStudents/>}></Route>
  </Routes>
  
  </BrowserRouter>
  
  </>
  );
}

export default App;
