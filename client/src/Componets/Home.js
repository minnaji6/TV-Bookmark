import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


function Home() {
  return (
    <>
   
<div className="App">

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

 </>
  );
}

export default Home;
