import React from "react";
import { Layout } from "antd";
import Box from "./Box";
const { Content } = Layout;

const Index = () => (
  <Layout style={{ background: "#cccc" }}>
    {/* #fafafa */}
    <Content style={{ textAlign: "center", lineHeight: "120px" }}>
      <Box />
    </Content>
  </Layout>
);
export default Index;
