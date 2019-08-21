import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import PriorityCard from './PriorityCard';
import LocationHolder from './LocationHolder';
import Header from './Header';
import edit from '../assets/edit.svg';
import { apiUrl } from '../config';

const PrioritiesPage = ({ orgId, neighborhood, searchType }) => {
  const [priorities, setPriorities] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      let url = '';
      switch (searchType) {
        case 'neighborhood':
          url = `${apiUrl}/priorities/orgs/${orgId}`;
          break;
        case 'district':
          url = `${apiUrl}/priorities/district/${orgId}`;
          break;
        default:
          url = `${apiUrl}/priorities/type/${orgId}`;
          break;
      }
      const res = await axios.get(url);

      res.data = [...res.data].sort((a, b) => (a.rank > b.rank ? 1 : -1));
      setPriorities(res.data);
    };
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (orgId === null) return <Redirect to="/selectNeighborhood" />;

  const prioritiesList = priorities.map((priority, index) => (
    <li key={priority.id}>
      {/* can later make visible with priority.visibility */}
      <PriorityCard id={priority.id} type={priority.prioritytype} description={priority.description} rank={priority.rank} style={{ animationDelay: `${index / 20}s` }} />
    </li>
  ));

  const header = searchType === 'neighborhood' ? (
    <Header
      title="Priorities"
      optionIcon={edit}
      option="/editPriorities"
      optionName="Edit Priorities"
    />
  ) : (
    <Header title="Priorities" />
  );

  return (
    <div>
      {header}
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
  orgId: PropTypes.string.isRequired,
  neighborhood: PropTypes.string.isRequired,
  searchType: PropTypes.string.isRequired,
};

export default PrioritiesPage;
