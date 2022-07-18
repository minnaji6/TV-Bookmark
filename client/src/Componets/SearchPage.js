import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button }  from "@mui/material";


const FetchCards = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/shows`)
        .then(res => setCards(res.data))
        
    }, [])

     const Delete = (id) => {
           setCards(prevCards=> {
            return prevCards.filter(card=> card.id != id)
           })
    } 

    

    return (
        <Grid container spacing={3}>
            {cards.map(card => (
                <Grid item xs={12} sm={6} md={3} key={card.id}>
                    <Card>
                        <CardMedia style = {{ height: 3, paddingTop: '56%'}}
                            image={card.image}
                            title={card.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {card.name}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}
export default FetchCards;