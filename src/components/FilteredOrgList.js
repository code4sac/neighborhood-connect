import React from 'react'

const FilteredOrgList = (props) => {

  const filterList = (items) => {
    return items.filter(function(item){
      return item.name.toLowerCase().search(
        props.searchString.toLowerCase()) !== -1;
    });
  }
        return (
            <div className="orgList">
                {filterList(props.items).map(function(item, index) {
                    return (
                        <div
                            index={index}
                            key={item.id}
                            className="orgList__card"
                            onClick={() => {
                                props.onSelect(item);
                            }}
                        >
                            {item.name}
                        </div>
                    );
                })}
            </div>
        );
}

export default FilteredOrgList