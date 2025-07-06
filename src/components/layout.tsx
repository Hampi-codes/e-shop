import { Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import AppRoutes from "../router";
import FloatingCartButton from "./floatingCartBtn";

const AppLayout = () => {
  return (
    <Layout
      style={{ minHeight: "100vh", backgroundColor: "#f4f4e5", width: "100vw" }}
    >
      <Content style={{ padding: "20px" }}>
        <AppRoutes />
      </Content>

      <Footer
        style={{
          textAlign: "center",
          boxShadow: "0px -1px 5px -3px grey",
          paddingBlock: "1rem",
        }}
        id="footer"
      >
        E-commerce ©2025 Created by Yogesh with Love ❤
      </Footer>
      <FloatingCartButton />
    </Layout>
  );
};

export default AppLayout;
