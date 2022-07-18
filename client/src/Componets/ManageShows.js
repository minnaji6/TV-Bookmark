import Button from '@mui/material/Button';
import FetchCardDetails from './FetchCardDetails';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useState , useEffect} from "react";
import Stack from "@mui/material/Stack";
import { Autocomplete } from "@mui/material";
import axios from 'axios';
import * as React from 'react';
import FetchCardDetailsOngoing from './FetchCardDetailsOngoing';
import FetchCardDetailsCancelled from './FetchCardDetailsCancelled';


function ManageShows() {
  const [tag, setTag] = useState("");
  const [ongoingVisible, setOngoingVisible] = useState(false);
  const [cancelledVisible, setCancelledVisible] = useState(false);

  const handleOnChange = (e) => {
    setTag(e.target.value);
  }

  useEffect(() => {
    tag === "ongoing" ? setOngoingVisible(true) : setOngoingVisible(false);
    tag === "cancelled" ? setCancelledVisible(true) : setCancelledVisible(false);
  }, [tag])


  const [selectedShow, setSelectedShow] = React.useState(['']);

     axios.get('http://localhost:3000/shows/')
      .then((res) =>  {
      setSelectedShow(res.data);
    });
  return (
    <>
    <div className="App">
    <div className="App-body">
      

    <div className="form2">

    <Stack sx={{width: 300, margin: "auto"}}>
            <Autocomplete
            id="show-search"
            getOptionLabel={(selectedShow) => `${selectedShow.name}`}
            options={selectedShow}
            sx={{width: 300}}
            isOptionEqualToValue={(option, value) => 
                option.name === value.name
            }
            noOptionsText={"Show Not Added"}
            renderOption={(props, selectedShow) => (
              <Box componet="li"{...props} key={selectedShow.id}>
                   {selectedShow.name}
                </Box> 
                
            )}
            renderInput={(params) => <TextField {...params} label="Search for an added Show"/>}
            />
            <Box  style={{backgroundColor:"#3376d2"}}>
            
            </Box>
            
        </Stack>

      <Button variant="contained"><SearchIcon/>SEARCH</Button>

      </div>

      <div className="TAGS">
      

      </div>

      <br/> 
      
      <h5>Select Show tag from dropdown</h5>

      <div className="tag">
      <br/>


      <select  onChange={handleOnChange} value={tag}> 
        <option value="ongoing">ongoing</option>
        <option value="cancelled">cancelled</option>
        <option value="3">upcoming</option>
        <option value="4">finished</option>
        <option value="5">watching</option>
        <option value="6">want to watch</option>
      </select>

      
      {ongoingVisible && <FetchCardDetailsOngoing/>}
      {cancelledVisible && <FetchCardDetailsCancelled/>}
      {!ongoingVisible && !cancelledVisible && <FetchCardDetails/>}

      <br/>
      <br/>

      </div>
      





    </div>

    </div>
    </>
      );
}

export default ManageShows;
