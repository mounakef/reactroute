import React from 'react'
import ReactStars from "react-rating-stars-component";
import './MovieCard.css'
const MovieCard = ({item}) => {

    
    return (
        < div>
             < img src={item.image} /> 

            <h1> {item.name}</h1>
            <h2> {item.date}</h2>
            <h2> {item.type}</h2>
            <p> {item.description}</p>
           <h1><ReactStars
            count={5}
            value ={item.rating}
            name="rating"
            size={24}
            position="center"
            activeColor="#ffd700"
               /> </h1>
           
        </div>
    )
}

export default MovieCard
