import React from 'react'
import PropTypes from 'prop-types';

const FilteredOrgList = (props) => {

  const filterList = (orgs) => {
    return orgs.filter(function (org) {
      return org.name.toLowerCase().search(
        props.searchString.toLowerCase()) !== -1;
    });
  }

  let orgListData = filterList(props.orgs).map(function (org, index) {
    return (
      <div
        index={index}
        key={org.id}
        className="orgList__card"
        style={{ animationDelay: `${index / 20}s` }}
        onClick={() => {
          props.onSelect(org);
        }}
      >
        {org.name}
        <span className="orgList__add">+</span>
      </div>
    );
  });

  let orgList = orgListData;

  return (
    <div className="orgList">
      {orgList}
    </div>
  );
}

FilteredOrgList.propTypes = {
  orgs: PropTypes.array,
  searchString: PropTypes.string,
  onSelect: PropTypes.func,
}

export default FilteredOrgList