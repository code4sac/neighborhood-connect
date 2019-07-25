import React, { useState, useEffect, } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import FilteredOrgList from './FilteredOrgList'
import Header from './Header';
import { apiUrl } from '../config';


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
    setSearchString('')
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
      <Header title={"Search"} />
      <div>
        {redirect ? (
          <Redirect to={"/"} />
        ) : (
            <div className="searchform u-margin-top-smallest">
              <form className="searchform__form">
               
                <label className="searchform__label" htmlFor="neighborhood">Neighborhood</label>
                <input
                  className="searchform__search u-margin-top-smallest u-outline-blue"
                  type="search"
                  id="neighborhood"
                  onChange={handleChange}
                  placeholder="Search Locations"
                />  
              </form>
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
