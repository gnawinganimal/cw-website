import Card from 'react-bootstrap/Card';
import React from 'react';

const Jammin = () => (
    <Card bg="secondary" className="spaced">
      <Card.Body>
        <Card.Title>Jammin</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">by Aidan Heller</Card.Subtitle>
        <Card.Text className="paragraph" >
          He be jammin out<br/>
          Beats that are unknown to me<br/>
          Ba bada da poom<br/>
          The sounds blare from his mouth hole<br/>
          He is irritating me
        </Card.Text>
      </Card.Body>
    </Card>
);

export default Jammin;
