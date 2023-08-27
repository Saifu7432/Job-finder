import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './Player.css'; // Import the custom CSS file
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Player extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
      isLoading: true,
      error: null,
      currentPage: 1,
      playersPerPage: 8,
    };
  }

  componentDidMount() {
    this.fetchPlayerList();
  }

  fetchPlayerList = async () => {
    try {
      const response = await fetch('https://finder-job.azurewebsites.net/player/getplayerlist');
      const data = await response.json();
      this.setState({ players: data.data.value });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const { players, isLoading, error, currentPage, playersPerPage } = this.state;
    const indexOfLastPlayer = currentPage * playersPerPage;
    const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;
    const currentPlayers = players.slice(indexOfFirstPlayer, indexOfLastPlayer);
    const totalPages = Math.ceil(players.length / playersPerPage);

    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }



    return (
      <div className="container">
        <h1>Players</h1>
        <Row className="justify-content-start">
          {currentPlayers.map((player, index) => (
            <Col key={index} sm={6} md={4} lg={3} className="mb-4">
              <Card className="custom-card">
                <Card.Header className="dark-header">{player.full_name}</Card.Header>
                <Card.Body>
                  <Card.Text>Email: {player.email} </Card.Text>
                  <Card.Text>Location: {player.location}</Card.Text>
                   <Card.Text>Country: {player.country}</Card.Text>
                  <Card.Text>Phone Number: {player.phone_number}</Card.Text>
                  <Button variant="primary">View Profile</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <span
              key={index}
              className={`page-number ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => this.handlePageChange(index + 1)}
            >
              {index + 1}
            </span>
          ))}
        </div>
      </div>
    );
  }
}

export default Player;
