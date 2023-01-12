import './ClassCard.css';

import React, {useState} from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

export default function ClassCard(info) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <Card>
      <Card.Img variant="top" src= {"../" + info.name + ".png"}/>
      <Card.Body>
        <Card.Title>{info.name}</Card.Title>
        <Card.Text>
          {info.text}
        </Card.Text>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{info.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{info.desc}</Modal.Body>
          <Modal.Footer className="justify-content-center">
            Teachers: {info.teachers}
          </Modal.Footer>
        </Modal>
        <Button variant="primary" onClick={handleShow}>See More</Button>
      </Card.Body>
    </Card>
  );
}
