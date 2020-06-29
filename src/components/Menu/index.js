import React from "react";

const Menu = ({ setMenu }) => {
  return (
    <div>
      <ul>
        <li onClick={() => setMenu("dashboard")}>Dashboard</li>
        <li onClick={() => setMenu("daily")}>Daily</li>
        <li onClick={() => setMenu("add")}>Add</li>
      </ul>
    </div>
  );
};

export default Menu;
