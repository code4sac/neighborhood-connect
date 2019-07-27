import React, { useState, useEffect, } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import PropTypes from 'prop-types';

import FilteredOrgList from './FilteredOrgList'
import Header from './Header';
import { apiUrl } from '../config';


const NeighborhoodSelector = ({ neighborhood, setNeighborhood, setOrgId }) => {
  const [searchString, setSearchString] = useState(neighborhood);
  const [redirect, setRedirect] = useState(false);
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    const fetchOrgs = async () => {
      const res = await axios.get(
        `${apiUrl}/orgs`
      )
      setOrganizations(res.data)
    }
    fetchOrgs();
    setSearchString('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectNeighborhood = org => {
    setNeighborhood(org.name);
    setOrgId(org.id);
    localStorage.setItem('orgId', `${org.id}`)
    localStorage.setItem('neighborhoodName', `${org.name}`)
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
                orgs={organizations}
                searchString={searchString}
                onSelect={handleSelectNeighborhood} />
            </div>
          )}
      </div>
    </div>
  );
};

NeighborhoodSelector.propTypes = {
  neighborhood: PropTypes.string,
  setNeighborhood: PropTypes.func,
  setOrgId: PropTypes.func,
}

export default NeighborhoodSelector;
