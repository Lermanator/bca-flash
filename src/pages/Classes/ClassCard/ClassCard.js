import './ClassCard.css';

import React, {useState} from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

export default function ClassCard(info) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <Card>
      <Card.Img variant="top" className="cardImg" src= {"../" + info.img + ".png"}/>
      <Card.Body>
        <Card.Title>{info.name}</Card.Title>
        <Card.Text>
          {info.text}
        </Card.Text>
        <Modal show={show} onHide={handleClose} centered dialogClassName="my-modal">
          <Modal.Header closeButton>
            <Modal.Title className='ms-auto'>{info.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{info.desc}</Modal.Body>
        </Modal>
        <Button variant="primary" onClick={handleShow}>See More</Button>
      </Card.Body>
    </Card>
  );
}
