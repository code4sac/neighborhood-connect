import React, { useEffect, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import PriorityCard from "./PriorityCard";
import LocationHolder from "./LocationHolder";
import Header from "./Header";
import axios from "axios";
import edit from "../assets/edit.svg";

const PrioritiesPage = ({ orgId, neighborhood }) => {
  const [priorities, setPriorities] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `http://localhost:3000/priorities/orgs/${orgId}`
      );
      setPriorities(res.data.rows);
    };
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //neighborhood is undefined
  console.log("current neighborhood:", neighborhood);
  return (
    <div>
    <Header title={"Priorities"} optionIcon={edit} option={"/addNewEvent"} optionName={"Edit Priorities"}  />
      <LocationHolder hood={neighborhood} />
      <div className="prioritiesPage">
        <ul>
          {priorities.map(priority => (
            <li key={priority.id}>
              <PriorityCard
                type={"Priority type will go here"}
                description={priority.description}
                rank={priority.rank}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PrioritiesPage;
