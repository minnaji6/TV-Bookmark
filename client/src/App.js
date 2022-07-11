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
import FetchCardsHome from './Componets/FetchCardsHome';




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
    <div className="App">
    <ThemeProvider theme={config.darkMode === "light" ? lightTheme : darkTheme}>
    <Container1 >
    <nav style={{ padding: '2rem 0 ', textAlign: 'center' }}>
        <Button onClick={() => themeChange('dark')}>Dark Mode</Button>
        <Button onClick={() => themeChange('light')}>Light Mode</Button>
      </nav>
      <NavBar/> 
      <Home/>
      <FetchCardsHome/>
      </Container1>
     

      
    </ThemeProvider>
   
   </div>
  );
}

export default App;
