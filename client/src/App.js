import React, { useEffect } from 'react';
import HomeLight from './Componets/HomeLight';
import NavBarLight from './Componets/NavBarLight';
import Button from '@mui/material/Button';
import { ThemeProvider } from 'styled-components';
import lightTheme from './Theme/light';
import darkTheme from './Theme/dark';
import Container1 from './Theme/Componets.js/Container1';
import { darkModeAction } from './actions/config_action';
import { useDispatch, useSelector } from 'react-redux';




function App() {

  const dispatch = useDispatch();
  const config = useSelector(state => state.config)

  useEffect(() => {
    if (!config.darkMode) {
      dispatch(darkModeAction(window.localStorage.getItem('theme')))
    }
  }, [config.darkMode, dispatch])

  const themeChange = (value) => {
    window.localStorage.setItem('theme', value)
    dispatch(darkModeAction(value))
  }
  return (
    <ThemeProvider theme={config.darkMode === "light" ? lightTheme : darkTheme}>
      <nav style={{ width: '50%', padding: '2rem 0 ', backgroundColor: 'gray', textAlign: 'center' }}>
        <Button onClick={() => themeChange('dark')}>Dark Mode</Button>
        <Button onClick={() => themeChange('light')}>Light Mode</Button>
      </nav>

      <Container1 >
      <NavBarLight/> 
      </Container1>
    </ThemeProvider>
   
   
  );
}

export default App;
