import React, { useEffect, useState } from "react";
import PriorityCard from "./PriorityCard";
import Header from "./Header";
import axios from "axios";
import edit from "../assets/edit.svg";

const PrioritiesPage = ({ orgId }) => {
  const [priorities, setPriorities] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `http://localhost:3000/priorities/orgs/${orgId}`
      );
      setPriorities(res.data);
      console.log(res.data);
    };
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Header
        title={"Priorities"}
        optionIcon={edit}
        option={"/editpriorities"}
        optionName={"Edit Priorities"}
      />
      <div className="prioritiesPage">
        <ul>
          {/* {priorities.map(priority => (
        <PriorityCard key={} type={} description={} rank={} />
      ))} */}
          <li>
            <PriorityCard
              rank={1}
              title={"Title of priority"}
              description={
                "Brief description of the priority. Brief description of the priority. Brief description of the priority."
              }
              tag={"Homelessness"}
            />
          </li>
          <li>
            <PriorityCard
              rank={2}
              title={"Graffiti"}
              description={"blah blah fffffffffffffffffffffffffffffff  blah"}
              tag={"Homelessness"}
            />
          </li>
          <li>
            <PriorityCard
              rank={3}
              title={"Crime"}
              description={"blah blah blah"}
              tag={"Homelessness"}
            />
          </li>
          <li>
            <PriorityCard
              rank={4}
              title={"Trash"}
              description={"blah blah blah"}
              tag={"Homelessness"}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PrioritiesPage;
