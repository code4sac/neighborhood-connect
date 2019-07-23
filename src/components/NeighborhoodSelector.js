import React, { useState, useEffect, } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import FilteredOrgList from './FilteredOrgList'
import Header from './Header';
import apiUrl from '../config';

const NeighborhoodSelector = ({ neighborhood, setNeighborhood }) => {
  const [searchString, setSearchString] = useState(neighborhood);
  const [redirect, setRedirect] = useState(false);
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    const fetchOrgs = async () => {
      const res = await axios.get(
        `${apiUrl}/orgs`
      )
      setOrganizations(res.data.rows)

    }
    fetchOrgs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <button onClick={() => { this.share() }}> Share </button>
      </Header>
      <div>
        {redirect ? (
          <Redirect to={"/"} />
        ) : (
            <div style={{ backgroundColor: "#77c" }}>
              <label htmlFor="neighborhood">Neighborhood</label>
              <input
                type="search"
                id="neighborhood"
                value={searchString}
                onChange={handleChange}
              />
              <FilteredOrgList
                items={organizations}
                searchString={searchString}
                onSelect={handleSelect} />
            </div>
          )}
      </div>
    </div>
  );
};

export default NeighborhoodSelector;
