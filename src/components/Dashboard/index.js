import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Dashboard = (props) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const url = "";
      const data = await fetch(url).then((res) => res.json());
      setState([...state, ...data.responseData]);
    };
  }, []);
  return <div></div>;
};

Dashboard.propTypes = {};

export default Dashboard;
