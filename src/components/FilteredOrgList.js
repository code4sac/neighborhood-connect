import React from 'react'
// import locationPlaceholder from '../assets/locationPlaceholder.svg';

const FilteredOrgList = (props) => {

    const filterList = (items) => {
        return items.filter(function (item) {
            return item.name.toLowerCase().search(
                props.searchString.toLowerCase()) !== -1;
        });
    }
    // const placeholder = <img src={locationPlaceholder} alt="placeholder" style={{ marginTop: "15vh" }} />;

    let orgListData = filterList(props.items).map(function (item, index) {
        return (
            <div
                index={index}
                key={item.id}
                className="orgList__card"
                style={{ animationDelay: `${index / 15}s` }}
                onClick={() => {
                    props.onSelect(item);
                }}
            >
                {item.name}
                <span className="orgList__add">+</span>
            </div>
        );
    });

    // console.log(props)
    // let orgList = props.searchString ? orgListData : placeholder;
    let orgList = orgListData;

    return (
        <div className="orgList">
            {orgList}
        </div>
    );
}

export default FilteredOrgList