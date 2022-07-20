import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Chip }  from "@mui/material";



const Watchlist = () => {
    const [cards, setCards] = useState([])
    const [showlist, setShowlist] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/wishlist`)
        .then(res => setCards(res.data))
        
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:3000/comments`)
        .then(res => setShowlist(res.data))
        
    }, [])
    
    return (
        <>
        <h2>Watchlist</h2>
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
       <h3>Shows sorted by tags</h3>
        <Grid container spacing={3}>
            {showlist.map(card => (
                <Grid item xs={12} sm={6} md={3} key={card.id}>
                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {card.show_name}
                            </Typography>

                            <Typography variant="body2" color="textSecondary" component="p">
                             {card.tag_id === 1 ? 'ONGOING' : card.tag_id === 2 ? 'CANCELLED' : card.tag_id === 3 ? 'UPCOMING' : card.tag_id === 4 ? 'FINISHED'  : card.tag_id === 5 ? 'WATCHING' : 'WANT TO WATCH'}

                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>


        
        </>
    )
}
export default Watchlist;