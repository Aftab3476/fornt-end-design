import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import './App.css';
import LandingPage from './Components/LandingPage';
import ViewPage from './Components/ViewPage';
import Post from './Components/Post';
import Gallery from './Components/Gallery';
import Todo from './Components/Todo';

const API = "https://panorbit.in/api/users.json";

function App() {
  const [user, setUser] = useState([]);
  const getData = async (url) => {
    const result = await fetch(url);
    const userData = await result.json();
    setUser(userData.users);
  };
  useEffect(() => {
    getData(API);
  }, []);

  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage user={user}/>}/>
          <Route path='/post' element={<Post user={user}/>}/>
          <Route path='/gallery' element={<Gallery user={user}/>}/>
          <Route path='/todo' element={<Todo user={user}/>}/>
          <Route path='/aftab/:id' element={ <ViewPage user={user} />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
