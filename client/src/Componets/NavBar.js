import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


function NavBarLight() {
  return (
    <>
    <div className="App">

<br/>
<div className="logo">
<img src="https://i.ibb.co/LppH4B9/Screen-Shot-2022-07-11-at-10-48-58-AM-removebg-preview.png" alt="LOGO"/>
</div>
<br/>

<div className="App-nav">
<ButtonGroup variant="contained" aria-label="outlined primary button group">
  <Button>HOME</Button>
  <Button>MANAGE SHOWS</Button>
  <Button>ADD SHOW</Button>
</ButtonGroup>

</div>


<br/>
<br/>

</div>
 </>
  );
}

export default NavBarLight;
