import React, { useState, useEffect, } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import PropTypes from 'prop-types';

import FilteredOrgList from './FilteredOrgList'
import Header from './Header';
import { apiUrl } from '../config';
import { priorityTypes } from "./seed";

const NeighborhoodSelector = ({ neighborhood, setNeighborhood, setOrgId, setSearchType }) => {
  const [searchString, setSearchString] = useState(neighborhood);
  const [redirect, setRedirect] = useState(false);
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    const fetchOrgs = async () => {
      const res = await axios.get(
        `${apiUrl}/orgs`
      )
      const neighborhoods = res.data.map((o) => { return {...o, type: 'neighborhood'} } )

      const districts = []
      for (let i = 1; i <= 8; i++) {
        districts.push({id: i, name: `District ${i}`, logo_url: 'lorem.ipsum.com', type: 'district'})
      }

      const priorityTypesMapped = priorityTypes.map(((pt) => {
         return {...pt, name: `Priority Type: ${pt.name}`, type: 'type'}
       }))
      setOrganizations(neighborhoods.concat(districts).concat(priorityTypesMapped))
    }
    fetchOrgs();
    setSearchString('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectNeighborhood = org => {
    setNeighborhood(org.name);
    console.log("org name set", org.name)
    console.log("org type set", org.type)
    setOrgId(org.id);
    setSearchType(org.type);
    localStorage.setItem('searchType', org.type)
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
  setSearchType: PropTypes.func,
  setOrgId: PropTypes.func,
}

export default NeighborhoodSelector;
