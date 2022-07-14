import React, { useEffect } from 'react';
import Home from './Componets/Home';
import NavBar from './Componets/NavBar';
import Button from '@mui/material/Button';
import { ThemeProvider } from 'styled-components';
import lightTheme from './Theme/light';
import darkTheme from './Theme/dark';
import Container1 from './Theme/Componets.js/Container1';
import { darkModeAction } from './actions/config_action';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowForm from './Componets/ShowForm';
import ManageShows from './Componets/ManageShows';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {configureStore} from '@reduxjs/toolkit'
import PageFooter from './Componets/PageFooter';

function App() {

  const dispatch = useDispatch();
  const config = useSelector(state => state.config)

  useEffect(() => {
    if (!config.darkMode) {
      dispatch(darkModeAction(window.localStorage.getItem('theme')))
    }
  }, [config.darkMode, dispatch])

  // console.log(config)

  const themeChange = (value) => {
    window.localStorage.setItem('theme', value)
    dispatch(darkModeAction(value))
  }
  return (
    <Router>
    <div className="App">
    <ThemeProvider theme={config.darkMode === "light" ? lightTheme : darkTheme}>
    <Container1 >
      <NavBar/> 
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/manageShows" element={<ManageShows/>}></Route>
          <Route path="/show/new" element={<ShowForm/>} ></Route>
          
      </Routes>
      <nav style={{ padding: '2rem 0 ', textAlign: 'center' }}>
        <Button onClick={() => themeChange('dark')}><DarkModeIcon/></Button>
        <Button onClick={() => themeChange('light')}><LightModeIcon/></Button>
      </nav>
      </Container1>
      <PageFooter/>
     
    </ThemeProvider>
   
   </div>
    </Router>
  );
}

export default App;
