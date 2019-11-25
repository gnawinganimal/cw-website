import Card from 'react-bootstrap/Card';
import React from 'react';

const Smash = () => (
    <Card bg="secondary" className="spaced">
      <Card.Body>
        <Card.Title>Smash</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">by Aidan Heller</Card.Subtitle>
        <Card.Text className="paragraph" >
          A glorious match<br/>
          Bowser drops into the void<br/>
          I won the Smash game
        </Card.Text>
      </Card.Body>
    </Card>
);

export default Smash;
