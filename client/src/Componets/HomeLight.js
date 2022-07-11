import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


function HomeLight() {
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
  <Button>VIEW SHOWS</Button>
  <Button>EDIT SHOWS</Button>
</ButtonGroup>

</div>


<br/>
<br/>
<div className="App-body">

  <div className="form2">

  <input type="text" placeholder="SEARCH SHOWS" />
  <br/>

  <Button variant="contained">SEARCH</Button>

  </div>

  <div className="TAGS">
  

  </div>

  <br/> 
  
  <h5>Select tag from dropdown</h5>

  <div className="tag">
  <br/>


  <select> 
    <option value="1">tag1</option>
    <option value="2">tag2</option>
    <option value="3">tag3</option>
  </select>

  {/* render shows based on tag here */}
  <br/>
  <br/>

  </div>



</div>

</div>
 </>
  );
}

export default HomeLight;
