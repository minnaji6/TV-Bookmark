import React, { useRef, useState, useEffect} from 'react';
import axios from 'axios';
import {motion} from 'framer-motion';
import "../App.css"


const FetchCardsHome = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/shows/')
        .then(res => setCards(res.data))
        
    }, [])
    return (
        <div className="App">
        <motion.div className= "carousel">
            <motion.div drag="x" className= "inner-carousel">
            {cards.map(card => {
                return(
                    <motion.div className= "item"  key={card.id}>
                    <img src={card.image} title={card.name}/>
                    </motion.div>
                );
            })}
             </motion.div>
        </motion.div>
        </div>
    );
}
export default FetchCardsHome;