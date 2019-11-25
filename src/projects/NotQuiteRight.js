import Card from 'react-bootstrap/Card';
import React from 'react';

const NotQuiteRight = () => (
    <Card bg="secondary" className="spaced">
      <Card.Body>
        <Card.Title>Not Quite Right</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">by Aidan Heller</Card.Subtitle>
        <Card.Text className="paragraph" >
          <p>
            It’s Sunday night and I’m downstairs,<br/>
            Anxiety at the front door,<br/>
            I just can’t sleep, what’s wrong with me?<br/>
            My shadow mocks me from the floor
          </p>
          <p>
            They say I’m being silly<br/>
            They say that I’m just fine,<br/>
            But I don’t really think so,<br/>
            Cause something’s not quite right
          </p>
          <p>
            I’m in my bed and thinking of<br/>
            The unknown that tomorrow brings<br/>
            To the stars I share my story<br/>
            And to the moon my sadness sings
          </p>
          <p>
            They say I’m being silly<br/>
            They say that I’m just fine,<br/>
            But I don’t really think so,<br/>
            Cause something’s not quite right
          </p>
          <p>
            In the morning all was silent<br/>
            A cool and pleasant breeze swept through,<br/>
            But nothing could heal my brokenness,<br/>
            So I supposed I had to just make do.
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
);

export default NotQuiteRight;
