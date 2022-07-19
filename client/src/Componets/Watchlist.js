import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button }  from "@mui/material";


const Watchlist = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/wishlist`)
        .then(res => setCards(res.data))
        
    }, [])
    
    return (
        <Grid container spacing={3}>
            {cards.map(card => (
                <Grid item xs={12} sm={6} md={3} key={card.id}>
                    <Card>
                        <CardMedia style = {{ height: 3, paddingTop: '56%'}}
                            image={card.show_image}
                            title={card.show_name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {card.show_name}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}
export default Watchlist;