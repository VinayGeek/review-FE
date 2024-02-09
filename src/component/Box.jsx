import React, { useState } from "react";
import { Card } from "antd";
import RadioOpt from "./RadioOpt";

///////////////////////////////////////////////

let arr = ["Hangzhou", "Shanghai", "Beijing", "Chengdu"];

///////////////////////////////////////////////

const Box = () => {
  return (
    <Card title="Card title" bordered={false} style={{ margin: "2rem" }}>
      <RadioOpt data={arr} defaultValue={arr[2]} />
    </Card>
  );
};
export default Box;
