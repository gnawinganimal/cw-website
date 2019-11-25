import Card from 'react-bootstrap/Card';
import React from 'react';

const Depression = () => (
    <Card bg="secondary" className="spaced">
      <Card.Body>
        <Card.Title>Depression</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">by Aidan Heller</Card.Subtitle>
        <Card.Text className="paragraph" >
          The night was cold and dark but<br/>
          It did not matter<br/>
          The falling flakes stung my skin<br/>
          I did not look up<br/>
          Avoiding pain is pointless<br/>
          Why bother at all<br/>
          I walked through that dark cold night<br/>
          And I was at peace<br/>
        </Card.Text>
      </Card.Body>
    </Card>
);

export default Depression;
