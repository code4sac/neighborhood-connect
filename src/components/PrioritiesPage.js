import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import PriorityCard from './PriorityCard';
import LocationHolder from './LocationHolder';
import Header from './Header';
import edit from '../assets/edit.svg';
import { apiUrl } from '../config';

const PrioritiesPage = ({ orgId, neighborhood }) => {
  const [priorities, setPriorities] = useState([]);

  useEffect(() => {
    const fetchPosts = async (neighborhood) => {
      const res = await axios.get(
        `${apiUrl}/priorities/orgs/${orgId}` //need to filter for orgs in locations
      );

      res.data = [...res.data].sort((a, b) => (a.rank > b.rank ? 1 : -1));
      setPriorities(res.data);
    };
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (orgId === null) return <Redirect to="/selectNeighborhood" />;

  let prioritiesList = priorities.map( (priority, index) => (
      <li key={priority.id}>
          {/* can later make visible with priority.visibility */}
          <PriorityCard id={priority.id} type={priority.prioritytype} description={priority.description} rank={priority.rank} style={{ animationDelay: `${index / 20}s`}} />
      </li>
  ));

  return (
    <div>
      <Header
        title={'Priorities'}
        optionIcon={edit}
        option={'/editPriorities'}
        optionName={'Edit Priorities'}
      />
      <LocationHolder hood={neighborhood} />
      <div className="prioritiesPage">
        <ul>
          {prioritiesList}
        </ul>
      </div>
    </div>
  );
};

PrioritiesPage.propTypes = {
  orgId: PropTypes.number,
  neighborhood: PropTypes.string,
};

export default PrioritiesPage;
