import React, { useEffect, useState } from "react";
import axios from "axios";

import PriorityCard from "./PriorityCard";
import LocationHolder from "./LocationHolder";
import Header from "./Header";
import edit from "../assets/edit.svg";
import { apiUrl } from '../config';

const PrioritiesPage = ({ orgId, neighborhood }) => {
  const [priorities, setPriorities] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `${apiUrl}/orgs/${orgId}`
      );
      setPriorities(res.data.rows);
    };
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header title={"Priorities"} optionIcon={edit} option={"/editPriorities"} optionName={"Edit Priorities"} />
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
