import React from 'react'
import {Modal, Button, Form} from 'react-bootstrap'; 
import {useState} from 'react';

function Add({handlerMovie}) {
    // imported
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // added to make the add btn functionnal

    const [title, setTitle]=useState('')
    const [genre, setGenre]=useState('')
    const [description, setDescription] = useState('')
    const [affiche, setAffiche] = useState('')
    const [rate, setRate] = useState('')
    const [trailer, setTrailer] = useState('')
    
    const addNewMovie = () => {
        handlerMovie({title,genre,description,affiche,rate,trailer})
        handleClose()
    }

    return (
    <div className="add">
        <Button variant="warning" onClick={handleShow} className="btnadd">
       ADD NEW MOVIE
        </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>ADD NEW MOVIE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Movie Title</Form.Label>
    <Form.Control type="email" placeholder="add the movie name" onInput ={(event)=> setTitle(event.target.value)}  />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Genre</Form.Label>
    <Form.Control type="email" placeholder="add the movie name"  onInput ={(event)=> setGenre(event.target.value)}  />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
    <Form.Label>Description</Form.Label>
    <Form.Control type="email" placeholder="add the movie description"  onInput ={(event)=> setDescription(event.target.value)}  />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Affiche</Form.Label>
    <Form.Control type="email" placeholder="Add the affiche"  onInput ={(event)=> setAffiche(event.target.value)} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Rating</Form.Label>
    <Form.Control type="email" placeholder="add the movie ratings"  onInput ={(event)=> setRate(event.target.value)} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Trailer</Form.Label>
    <Form.Control type="email" placeholder="add the movie name"  onInput ={(event)=> setTrailer(event.target.value)}  />
    </Form.Group>
        </Form>
        
        
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Cancel
            </Button>
            <Button variant="warning" onClick={addNewMovie}>
            Save Changes
            </Button>
        </Modal.Footer>
        </Modal>
    </div>
    );
}


export default Add;
