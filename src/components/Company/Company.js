import React, { Component } from 'react';

export default class CompanyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companylist: [] // Initialize the companylist state
    };
  }

  componentDidMount() {
    this.fetchCompanyList();
  }

  fetchCompanyList = async () => {
    const response = await fetch('https://finder-job.azurewebsites.net/company/getcompanylist');
    const data = await response.json();
    this.setState({ companylist: data.data.value });
  };

  render() {
    return (
      <div>
        <h1>Company List</h1>
        {this.state.companylist.length > 0 ? (
          <div>
            {this.state.companylist.map((item, i) => (
              <div key={i}>
                <h2>{item.company_name}</h2>
                <p>Industry: {item.industry}</p>
                <p>Description: {item.company_description}</p>
                <p>Location: {item.headquarters_location}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No companies available.</p>
        )}
      </div>
    );
  }
}
