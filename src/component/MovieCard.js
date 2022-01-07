import React from 'react'
import {Link} from 'react-router-dom'
    import {Card, Button} from 'react-bootstrap';
    import Rate from './rating'
    import './cards.css'

function MovieCard ({movie}) {
    console.log(movie)

        return (  
        <div >
            <Card style={{ width: '18rem' }} className="movie">
        <Card.Img className='affiche' variant="top" src= {movie.affiche} />
        <Card.Body>
        <Card.Title className='title'> {movie.title} </Card.Title>
        <Card.Text className="genre">
        {movie.genre}
        </Card.Text>
    <div className="rate">
        <Link to={`/Details/${movie.id}`}><Button variant='primary'> Details</Button></Link>
        <Card.Text > <Rate rate={movie.rate} />
        </Card.Text>
        {/* <a class="btn btn-primary" href={movie.trailer} role="button">Link</a> */}
        </div>
        
        
    </Card.Body>
    </Card>
        </div>
            )
    
    
    
    }

export default MovieCard
