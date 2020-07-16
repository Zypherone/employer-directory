import React, { Component } from "react";
import Nav from "./Nav";
import DataTable from "./DataTable";
import API from '../utils/API';
import '../styles/DataArea.css';

export default class DataArea extends Component {
  state = {
    users: [{}],
    order: "descend",
    filteredUsers: [],
    headings: [
      { name: "Profile", width: "10%", order: "descend" },
      { name: "name", width: "10%", order: "descend" },
      { name: "phone", width: "20%", order: "descend" },
      { name: "email", width: "20%", order: "descend" },
      { name: "dob", width: "10%", order: "descend" }
    ]
  }

  handleSort = heading => {
    
    let currentOrder = this.state.headings
      .filter(el => el.name === heading)
      .map(el => el.order)
      .toString();


    if (currentOrder === "descend") {
      currentOrder = "ascend";
    } else {
      currentOrder = "descend";
    }

    const compareFnc = (a, b) => {
      if (currentOrder === "ascend") {
        // account for missing values
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        // numerically
        else if (heading === "name") {
          return a[heading].first.localeCompare(b[heading].first);
        } else if (heading === "dob") {
          return a[heading].age - b[heading].age;
        } else {
          return a[heading].localeCompare(b[heading]);
        }
      } else {
        // account for missing values
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        // numerically
        else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        } else if (heading === "dob") {
          return b[heading].age - a[heading].age;
        }  else {
          return b[heading].localeCompare(a[heading]);
        }
      }

    }
    
    
    const sortedUsers = this.state.filteredUsers.sort(compareFnc);
    const updatedHeadings = this.state.headings.map(el => {
      el.order = el.name === heading ? currentOrder : el.order;
      return el;
    });

    this.setState({ 
      filteredUsers: sortedUsers,
      headings: updatedHeadings
    });
  }

  handleSearchChange = event => {
    const filter = event.target.value;
    const filteredList = this.state.users.filter(item => {
      // merge the data together and then check the user's input
      let values = Object.values(item)
        .join('')
        .toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ filteredUsers: filteredList });
  }
  
  componentDidMount() {
    API.getUsers().then(results => {
      this.setState({
        users: results.data.results,
        filteredUsers: results.data.results
      });
    });
  }

  render() {
    return (
      <>
        <Nav handleSearchChange={this.handleSearchChange} />
        <DataTable
          headings={this.state.headings}
          users={this.state.filteredUsers}
          handleSort={this.handleSort}
        />
      </>
    );
  }
}