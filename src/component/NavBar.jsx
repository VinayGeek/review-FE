import React from "react";
import { Layout } from "antd";
import Icon from "../svg/Icon";
const { Header } = Layout;

const headerStyle = {
  display: "grid",
  alignItems: "center",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  lineHeight: "unset",
  height: "unset",
  color: "#fff",
  padding: "0 20px",
  backgroundColor: "#0958d9",
  position: "sticky",
  top: 0,
  zIndex: 1,
};

const NavBar = () => (
  // <Layout style={{ overflow: "hidden" }}>
  <Header style={headerStyle}>
    <span>
      <Icon.health />
    </span>
    <h1 style={{ placeSelf: "center" }}>Review</h1>
  </Header>
  // </Layout>
);
export default NavBar;
