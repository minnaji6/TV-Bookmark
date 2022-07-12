import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import FetchCardDetails from './FetchCardDetails';


function ManageShows() {
  return (
    <>
    <div className="App">
    <div className="App-body">
      

    <div className="form2">

      <input type="text" placeholder="SEARCH SHOWS" />
      <br/>

      <Button variant="contained">SEARCH</Button>

      </div>

      <div className="TAGS">
      

      </div>

      <br/> 
      
      <h5>Select Show tag from dropdown</h5>

      <div className="tag">
      <br/>


      <select> 
        <option value="1">ongoing</option>
        <option value="2">cancelled</option>
        <option value="3">upcoming</option>
        <option value="4">finished</option>
        <option value="5">watching</option>
        <option value="6">want to watch</option>
      </select>

      {/* render shows based on tag here */}
      <br/>
      <br/>

      </div>

      <FetchCardDetails />



    </div>

    </div>
    </>
      );
}

export default ManageShows;
