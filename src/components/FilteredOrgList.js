import React from 'react'

const FilteredOrgList = (props) => {

  const filterList = (items) => {
    return items.filter(function(item){
      return item.name.toLowerCase().search(
        props.searchString.toLowerCase()) !== -1;
    });
  }
        return (<div className="orgList">
           {
             filterList(props.items).map(function(item) {
               return (
                <div key={item.id}
                     className="orgListCard"
                     onClick={() => {props.onSelect(item)}}>
                  {item.name}
                </div>

               )
             })
           }
        </div>)
}

export default FilteredOrgList