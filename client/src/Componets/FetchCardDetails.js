import React, { useState, useEffect} from 'react'
import axios from 'axios'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { darkModeAction } from '../actions/config_action';
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, Chip, Box }  from "@mui/material";


const FetchCardDetails = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/shows/')
        .then(res => setCards(res.data))
        
    }, [])

     const Delete = (id) => {
           setCards(prevCards=> {
            return prevCards.filter(card=> card.id != id)
           })

           axios.delete('http://localhost:3000/shows/' + id)
           .then(res => setCards(res.data))
        //    console.log(setCards)
    } 



const dispatch = useDispatch();
const config = useSelector(state => state.config)
    
  useEffect(() => {
    if (!config.darkMode) {
      dispatch(darkModeAction(window.localStorage.getItem('theme')))
    }
  }, [config.darkMode, dispatch])


    return (
        <Grid container spacing={3}>
            {cards.map(card => (
                <Grid item xs={12} sm={6} md={3} key={card.id}>
                    <Card>
                        <CardMedia style = {{height: 2, paddingTop: '56%'}}
                            image={card.image}
                            title={card.name}
                        />
                        
                        <CardContent style={config.darkMode === "light" ? {backgroundColor: "white"} : {backgroundColor: "#254cac"}}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {card.name}
                                <Chip label={card.show_tags} color={card.show_tags === 'cancelled' ? 'error' : card.show_tags === 'watching' ? 'success' : card.show_tags === 'upcoming' ? 'info' : card.show_tags === 'want to watch' ? 'warning' : 'primary'}/>
                            </Typography>
                            <Box style={{backgroundColor:"#3376d2"}}>
                            <Typography component="span" variant="caption" color="text.secondary"  fontSize="1em" fontWeight="bold">
                            {card.show_comment}
                            </Typography>
                            </Box>
                            <br/>
                            <Typography  component="span"  > 
                               <Box  style={config.darkMode === "light" ? {backgroundColor: ""} : {backgroundColor: "#3376d2"}} component="span" sx={{ p: 2, border: '1px dashed grey' }}>
                                SEASON  
                                <Chip label={card.show_season}/>
                                EPISODE  
                                <Chip label={card.show_episode}/>
                                </Box>
                            </Typography>
                        </CardContent>
                        <CardActions style={config.darkMode === "light" ? {backgroundColor: "white"} : {backgroundColor: "black"}}>
                            <Button size="small" onClick={()=> Delete(card.id)}> <DeleteForeverIcon/></Button>
                            <Button size="small" > <EditIcon/> </Button>
                         </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}
export default FetchCardDetails;