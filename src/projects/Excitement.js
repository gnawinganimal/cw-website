import Card from 'react-bootstrap/Card';
import React from 'react';

const Excitement = () => (
    <Card bg="secondary" className="spaced">
      <Card.Body>
        <Card.Title>Excitement</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">by Aidan Heller</Card.Subtitle>
        <Card.Text className="paragraph" >
          My legs quivered as I sat<br/>
          I could barely sit still<br/>
          The anticipation filled my brain<br/>
          I could think of nothing else<br/>
          I wish I was free from time<br/>
          And could chase my dreams into the future<br/>
          But I must wait<br/>
          We were still five minutes away
        </Card.Text>
      </Card.Body>
    </Card>
);

export default Excitement;
