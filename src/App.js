import React from "react";
import Menu from "./components/Menu";
import Add from "./components/Add";
import Dashboard from "./components/Dashboard";
import Daily from "./components/Daily";
import { Divider } from "antd";
import "antd/dist/antd.css";

const App = () => {
  return (
    <div>
      <Menu />
      <Divider />
      <Dashboard />
      <Divider />
      <Daily />
      <Divider />
      <Add />
    </div>
  );
};

export default App;
