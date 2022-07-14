import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import HomeIcon from '@mui/icons-material/Home';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <>
    <div className="App">

<br/>
<div className="logo">
  <Link to ="/home">
<img src="https://i.ibb.co/LppH4B9/Screen-Shot-2022-07-11-at-10-48-58-AM-removebg-preview.png" height={150} alt="LOGO" title="TV BOOKMARK LOGO"/>
</Link>
</div>
<br/>

<div className="App-nav">
<ButtonGroup variant="contained" aria-label="outlined primary button group">
  <Button href="/home" ><HomeIcon/>HOME</Button>
  <Button href="/manageShows"><ManageSearchIcon/>MANAGE SHOWS</Button>
  <Button href="/show/new"><QueuePlayNextIcon/> ADD NEW SHOW</Button>
</ButtonGroup>

</div>


<br/>
<br/>

</div>
 </>
  );
}

export default NavBar;
