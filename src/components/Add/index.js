import React, { useState } from "react";
import { Input, InputNumber, Button, DatePicker, Divider } from "antd";

const AddComponent = () => {
  const [state, setState] = useState({
    amount: 0,
    description: "",
    date: "",
  });

  const { amount, description, date } = state;

  const handleOnChange = (e, key) => {
    setState({ ...state, [key]: e.target.value });
  };

  const handleSubmit = async () => {
    const url = "";
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    });

    setState({ ...state, amount: 0, description: "", date: "" });
  };

  return (
    <div className="add-page">
      จำนวน
      <InputNumber
        min={0}
        defaultValue={amount}
        onChange={(e) => handleOnChange(e, "amount")}
      />
      วันที่
      <DatePicker
        defaultValue={date}
        onChange={value => setState(value)}
      />
      รายละเอียด
      <Input
        value={description}
        onChange={(e) => handleOnChange(e, "description")}
      />
      <Divider />
      <Button onClick={handleSubmit}>บันทึก</Button>
    </div>
  );
};

export default AddComponent;
