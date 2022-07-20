import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import Stack from "@mui/material/Stack";
import { Autocomplete } from "@mui/material";
import axios from 'axios';
import css from '../App.css';

function ShowForm() {


  const [formState, setFormState] = useState({});
  const [showId, setShowId]= useState('');
 

  const [selectedShow, setSelectedShow] = React.useState(['']);

     axios.get('http://localhost:3000/shows/')
      .then((res) =>  {
      setSelectedShow(res.data);
    });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((formState) => ({ ...formState, [name]: value }));
  };

   
  const num = ((selectedShow.length)+1)
  const addShows = () => {
    fetch(`http://localhost:3000/show/${num}`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify(formState)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)});}
  

  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));
  
  return (
    <>
    <div className="ShowForm-container">
        
       <Box >
        <Typography colour="inherit" > Add New Show </Typography>
        </Box>
        <br/>
        

        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
          required
          id="outlined-required"
          label="Name"
          name="name"
          onChange={handleChange}
          value={formState.name}
        />
        
        <TextField
          required
          id="outlined-required"
          label="image"
          name="image"
          onChange={handleChange}
          value={formState.image}
        />

        <TextField
          required
          id="outlined-required"
          name="show_tags"
          label="tags"
          onChange={handleChange}
          value={formState.show_tags}
        />
        <TextField
          required
          id="outlined-required"
          label="COMENT HERE"
          name="show_comment"
          onChange={handleChange}
          value={formState.show_comment}
        />

        <TextField
          required
          id="outlined-required"
          label="Season"
          name="show_season"
          onChange={handleChange}
          value={formState.show_season}
        />
          <TextField
          required
          id="outlined-required"
          label="EPISODE"
          name="show_episode"
          onChange={handleChange}
          value={formState.show_episode}

          
        />

    </div>
        
      {/* <pre>{JSON.stringify(formState, null, 2)}</pre> */}
      
        <Box>
          <Button
              onClick={() => {
                addShows(num);
                alert('NEW SHOW ADDED!');
              }}
            >
              Submit NEW show
          </Button>
              
        </Box>
     
    </Box>
    <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="primary">Reference for shows </Typography>
            <em>{"And here's"}</em> <b>{'an'} {'amazing resource'} </b> {"for show info"}
          </React.Fragment>
        }
      >
        <Button href="https://thetvdb.com/" target="_blank" >REFERENCE LINK FOR SHOW INFO</Button>
      </HtmlTooltip>

      <br/>
      <br/>
      <br/>
      <Stack sx={{width: 300, margin: "auto"}}>
      <Box  style={{backgroundColor:"#3376d2"}}>
            <Autocomplete
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
           
            
            </Box>
            
        </Stack>
        </div>
        
    </>
   
    
  )
}


export default ShowForm