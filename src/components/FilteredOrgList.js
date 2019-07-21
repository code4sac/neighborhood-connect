import React from 'react'

const FilteredOrgList = (props) => {

  const filterList = (items) => {
    return items.filter(function(item){
      return item.name.toLowerCase().search(
        props.searchString.toLowerCase()) !== -1;
    });
  }
        return (<ul>
           {
             filterList(props.items).map(function(item) {
               return (
                <li key={item.id} onClick={() => {props.onSelect(item)}}>{item.name}</li>
               )
             })
           }
        </ul>)
}

export default FilteredOrgList