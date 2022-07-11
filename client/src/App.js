import './App.css';
import HomeLight from './Componets/HomeLight';
import NavBarLight from './Componets/NavBarLight';
import Button from '@mui/material/Button';
import { ThemeProvider } from 'styled-components';
import lightmode from './Theme/light';
import darkmode from './Theme/dark';
import Container1 from './Theme/Componets.js/Container1';




function App() {
  return (
    <>
    <ThemeProvider theme={lightmode}>
    <nav style={{widith: '100%', paddding: '2rem 0', backgroundColor: '#gray', textAlign: 'center'}}>
      <Button>Dark Mode</Button>
      <Button>Light Mode</Button>
    </nav>
    <Container1>
    <HomeLight/>
    </Container1>
    </ThemeProvider>
    
  </>
  );
}

export default App;
