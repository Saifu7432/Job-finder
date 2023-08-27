import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const JobCard = ({ job }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{job.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{job.companyName}</Card.Subtitle>
        <Card.Text>{job.description}</Card.Text>
        <Button variant="primary" href={job.website} target="_blank">
          Visit Website
        </Button>
      </Card.Body>
    </Card>
  );
};

export default JobCard;
