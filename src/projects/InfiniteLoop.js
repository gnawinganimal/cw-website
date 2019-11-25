import Card from 'react-bootstrap/Card';
import React from 'react';

const InfiniteLoop = () => (
    <Card bg="secondary" className="spaced">
      <Card.Body>
        <Card.Title>Infinite Loop</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">by Aidan Heller</Card.Subtitle>
        <Card.Text className="paragraph" >
          Writing a haiku<br/>
          It is about a haiku<br/>
          It is this haiku<br/>
        </Card.Text>
      </Card.Body>
    </Card>
);

export default InfiniteLoop;
