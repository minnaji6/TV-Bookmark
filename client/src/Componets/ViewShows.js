import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


function ViewShows() {
  return (
    <>
    <div className="App">

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

export default ViewShows;
