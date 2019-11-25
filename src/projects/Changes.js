import Card from 'react-bootstrap/Card';
import React from 'react';

const Changes = () => (
    <Card bg="secondary" className="spaced">
      <Card.Body>
        <Card.Title>Changes</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">by Aidan Heller</Card.Subtitle>
        <Card.Text className="paragraph" >
          The trees were bright green<br/>
          But then they were red<br/>
          Where did the leaves go<br/>
          Oh look they’re back now<br/>
          Like the trees we go<br/>
          Through changes as well<br/>
          There are peaks and crests<br/>
          It will get better
        </Card.Text>
      </Card.Body>
    </Card>
);

export default Changes;
