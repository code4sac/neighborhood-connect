import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import FilteredOrgList from './FilteredOrgList'
import Header from './Header';

const NeighborhoodSelector = ({ neighborhood, setNeighborhood }) => {
  const [searchString, setSearchString] = useState(neighborhood);
  const [redirect, setRedirect] = useState(false);

  const tempOrganizations = [
    {id: 0, name: 'AlkaLi and mansion flats historic neighborhood ASSOCIATION'},
    {id: 1, name: 'Avondale/Glen Elder Neighborhood Association (AGENA)'},
    {id: 2, name: 'Ben Ali Community ASSOCIATION'},
    {id: 3, name: 'Beverly Way Neighborhood ASSOCIATION'},
    {id: 4, name: 'Boulevard Park neighborhood ASSOCIATION'},
    {id: 5, name: 'Brentwood South Neighborhood ASSOCIATION'},
    {id: 6, name: 'Brookfield Homeowners Association'},
    {id: 7, name: 'Old North Sacramento/Dixieanne COMMUNITY ASSOCIATION'},
    {id: 8, name: 'North Sacramento Chamber of Commerce'},
    {id: 9, name: 'River City Commons'},
    {id: 10, name: 'River Grove Homeowners Association'},
    {id: 11, name: 'River Oaks Community ASSOCIATION (ROCA)'},
    {id: 12, name: 'River Park Neighborhood ASSOCIATION'}]

  const handleSelect = org => {
    setNeighborhood(org.name);
    setRedirect(true);
  };

  const handleChange = e => {
    setSearchString(e.target.value);
  };

  return (
    <div>
    <Header>
    <img alt="title" src={'an image'} />
    <h2>Event Title</h2>
    <p>Event Author</p>
    <p>07/20/2019</p>
    <button onClick={() => {this.share()}}> Share </button>
    </Header>
    <div>
      {redirect ? (
        <Redirect to={"/"} />
      ) : (
          <div style={{backgroundColor: "#77c"}}>
          <label for="neighborhood">Neighborhood</label>
          <input
            type="text"
            id="neighborhood"
            value={searchString}
            onChange={handleChange}
          />
          <FilteredOrgList
            items={tempOrganizations}
            searchString={searchString}
            onSelect={setNeighborhood} onSelect={handleSelect}/>
        </div>
      )}
    </div>
    </div>
  );
};

export default NeighborhoodSelector;
