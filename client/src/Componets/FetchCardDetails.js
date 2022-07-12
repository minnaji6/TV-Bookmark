import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { ThemeProvider } from 'styled-components';
import lightTheme from '../Theme/light';
import darkTheme from '../Theme/dark';
import Container1 from '../Theme/Componets.js/Container1';
import { useDispatch, useSelector } from 'react-redux';
import { darkModeAction } from '../actions/config_action';
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button }  from "@mui/material";


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
           console.log(setCards)
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
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                               Render comments here
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary" component="p"> 
                                <Button variant="contained" size="small" color="inherit" key={card.id}>ONGOING</Button>
                            </Typography>
                        </CardContent>
                        <CardActions style={config.darkMode === "light" ? {backgroundColor: "white"} : {backgroundColor: "black"}}>
                            <Button size="small" onClick={()=> Delete(card.id)}> Delete</Button>
                            <Button size="small" > Edit</Button>
                         </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}
export default FetchCardDetails;