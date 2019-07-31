import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import PriorityCard from './PriorityCard';
import Header from './Header';
import LocationHolder from './LocationHolder';
import { apiUrl } from '../config';

import LinkToPage from './LinkToPage';
import greyplus from '../assets/add-grey-button.svg';
import blackArrow from '../assets/chevron-right-black.svg';

import HeaderBlock from './HeaderBlock';

export default class PrioritiesOrderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      priorities: [],
      prioritiesFetched: false,
    };
  }

  componentDidMount() {
    this.fetchPriorities();
  }

  async fetchPriorities() {
    let updatedState = { ...this.state };
    updatedState.prioritiesFetched = false;

    const res = await axios.get(
      `${apiUrl}/priorities/orgs/${this.props.orgId}`
    );

    let sortedData = [...res.data].sort((a, b) => (a.rank > b.rank ? 1 : -1));
    updatedState.priorities = sortedData;
    updatedState.prioritiesFetched = true;
    this.setState(updatedState);
  }

  async promoteRank(id, priorityIdx) {
    if (priorityIdx > 0 && priorityIdx < this.state.priorities.length) {
      const state = { ...this.state };
      // new ranks for the two priorities that are affected by promotion.
      const promotedRank = priorityIdx; // 2
      const demotedRank = priorityIdx + 1; // 3

      // priorities id's for the two priorities affected by promotion
      const promotedId = state.priorities[priorityIdx].id;
      const demotedId = state.priorities[priorityIdx - 1].id;

      try {
        await this.updatePriorityRanks(
          promotedId,
          demotedId,
          promotedRank,
          demotedRank
        );
        await this.fetchPriorities();
      } catch (err) {
        // some sort of error handeling
        console.log(err);
      }
    }
  }

  // promote ex: 2 => 3 (base 10)
  async demoteRank(id, priorityIdx) {
    if (priorityIdx < this.state.priorities.length - 1) {
      const state = { ...this.state };

      const demotedRank = priorityIdx + 2;
      const promotedRank = priorityIdx + 1;

      // priorities id's for the two priorities affected by promotion
      const promotedId = state.priorities[priorityIdx + 1].id;
      const demotedId = state.priorities[priorityIdx].id;

      try {
        await this.updatePriorityRanks(
          promotedId,
          demotedId,
          promotedRank,
          demotedRank
        );

        await this.fetchPriorities();
      } catch (err) {
        // some sort of error handeling
        console.log(err);
      }
    }
  }

  async updatePriorityRanks(promotedId, demotedId, promotedRank, demotedRank) {
    const body = {
      promotedId: promotedId,
      demotedId: demotedId,
      promotedRank: promotedRank,
      demotedRank: demotedRank,
    };
    await axios.post(`${apiUrl}/priorities/updateRank`, body);
  }

  render() {
    let sortedData = [...this.state.priorities].sort((a, b) =>
      a.rank > b.rank ? 1 : -1
    );
    let sortedDataList = sortedData.map((priority, index) => {
      return (
        <li key={priority.id}>
          <PriorityCard
            id={priority.id}
            rank={priority.rank}
            type={priority.prioritytype}
            description={priority.description}
            promote={() => {
              this.promoteRank(priority.id, index);
            }}
            demote={() => {
              this.demoteRank(priority.id, index);
            }}
            location={this.props.location.pathname}
            style={{ animationDelay: `${ index / 20}s`}}
          />
        </li>
      );
    });

    if (this.props.orgId === null) return <Redirect to="/selectNeighborhood" />;
    return (
      <div>
        <Header title={'Edit Priorities'} />
        <LocationHolder hood={this.props.neighborhood} />

        <div className="prioritiesPage">
          <HeaderBlock name={"Add New Priority"} description={"Noticed something new in your community?"} />
          <LinkToPage form={"/addPriority"} icon={greyplus} optionName={"Add Priority"} image={blackArrow} />
          <HeaderBlock name={"Rearrange Priorities"} description={"Rearrange priorities by clicking promote/demote."} />
          <ul>{sortedDataList}</ul>
        </div>
      </div>
    );
  }
}

PrioritiesOrderPage.propTypes = {
  neighborhood: PropTypes.string,
  orgId: PropTypes.number,
};
