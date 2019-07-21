import React, { Component, useState } from 'react';
import OrgList from './FilteredOrgList'


export default class OrganizationsPage extends Component {
  
  constructor(props) {
    super(props)
    this.state = { searchString: '' }
  }
  organizations = ['AlkaLi and mansion flats historic neighborhood ASSOCIATION',
    'Avondale/Glen Elder Neighborhood Association (AGENA)',
    'Ben Ali Community ASSOCIATION',
    'Beverly Way Neighborhood ASSOCIATION',
    'Boulevard Park neighborhood ASSOCIATION',
    'Brentwood South Neighborhood ASSOCIATION',
    'Brookfield Homeowners Association']

  filterList = (event) => {
    this.setState({searchString: event.target.value})
  }

  render() {
    return (
      <div>
      <input type="text" placeholder="Search" value={this.state.searchString} 
          onChange={this.filterList}/>
      <div>
        <OrgList items={this.organizations} searchString={this.state.searchString}/>
      </div>
      </div>
    );
  }
}
