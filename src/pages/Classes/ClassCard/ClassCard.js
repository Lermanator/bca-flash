import {React, useState} from 'react';
import './ClassCard.css';
import { Card, Button } from 'react-bootstrap';

export default function ClassCard(info) {

  return (
    <Card>
      <Card.Img variant="top" src= {"../" + info.name + ".png"}/>
      <Card.Body>
        <Card.Title>{info.name}</Card.Title>
        <Button variant="primary">See More</Button>
      </Card.Body>
    </Card>
  );
}
