import React, { Component } from "react";
import {  Button } from "react-bootstrap";
import "./Home.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


class Home extends Component {
  state = {
    searchText: "",
    location: "",
    category: "",
    searchResults: [],
    loading: false,
    error: null,
    currentPage: 1,
    playersPerPage: 8,
  };

  handleSearch = async () => {
    const { searchText, location, category } = this.state;

    const searchsearchText = searchText || null;
    const searchCategory = category || 0;
    const searchLocation = location || 0;
    const apiUrl = `https://localhost:7135/job/searchjob?search=${searchsearchText}&category=${searchCategory}&location=${searchLocation}`;

    try {
      this.setState({ loading: true, error: null });

      const response = await fetch(apiUrl);
      const data = await response.json();

      this.setState({
        searchResults: data.data.value,
        loading: false,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: "An error occurred while fetching the data.",
      });
    }
  };
  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };
  render() {
    const { searchResults, isLoading, error, currentPage, JobsPerPage } =      this.state;
    const indexOfLastJobs = currentPage * JobsPerPage;
    const indexOfFirstJobs = indexOfLastJobs - JobsPerPage;
    const currentJobs = searchResults.slice(indexOfFirstJobs, indexOfLastJobs);
    const totalPages = Math.ceil(searchResults.length / JobsPerPage);
    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }
    return (
      <div className="home-container">
        <div className="background-image"></div>
        <div className="width-100 banner-section">
          <div className="container">
            <h1 className="banner-heading">
              Find The Best Job For Your Future
            </h1>
            <div className="search-sect">
              <input
                type="text"
                className="search-textbox"
                placeholder="Search Job, Skills, Company"
                value={this.state.searchText}
                onChange={(e) => this.setState({ searchText: e.target.value })}
              />
            </div>
            <div className="search-sect">
              <input
                type="text"
                className="search-textbox"
                placeholder="Select Location"
                value={this.state.location}
                onChange={(e) =>
                  this.setState({ location: e.target.value ?? 0 })
                }
              />
              <i className="fa fa-life-ring icons" aria-hidden="true"></i>
            </div>
            <div className="search-sect">
              <input
                type="text"
                className="search-textbox"
                placeholder="All categories"
                value={this.state.category}
                onChange={(e) =>
                  this.setState({ category: e.target.value ?? 0 })
                }
              />
              <i className="fa fa-caret-down icons" aria-hidden="true"></i>
            </div>
            <div className="search-sect">
              <button className="search-button" onClick={this.handleSearch}>
                <i className="fa fa-search" aria-hidden="true"></i> Search Here
              </button>
            </div>
          </div>
        </div>
        {searchResults.length > 0 && (
          <div className="search-results">
            <h2>Search Results</h2>
            <Row className="justify-content-start">
              {searchResults.map((jobs, index) => (
                <Col key={index} sm={6} md={4} lg={3} className="mb-4">
                  <Card className="custom-card">
                    <Card.Header className="dark-header">
                      {jobs.title}
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>Description: {jobs.description}</Card.Text>
                      <Card.Text>Company Name: {jobs.companyName}</Card.Text>
                      <Card.Text>Type: {jobs.type}</Card.Text>
                      <Button variant="primary">View details</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

          </div>
        )}
                    <div className="pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <span
                  key={index}
                  className={`page-number ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                  onClick={() => this.handlePageChange(index + 1)}
                >
                  {index + 1}
                </span>
              ))}
            </div>
        <div className="info-section">
          <h2>Empower Your Team with Player Finder</h2>
          <p>
            Player Finder is your ultimate platform for discovering and
            connecting with exceptional players ready to elevate your team's
            performance. We specialize in uniting athletes, gamers, and a
            diverse array of skilled individuals, all eager to bring their
            unique talents to your team.
{}          </p>
        </div>
      </div>
    );
  }
}

export default Home;
