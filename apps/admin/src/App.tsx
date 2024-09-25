import { Layout } from "antd";

const App = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider width="12.5%" style={{ background: "#eee" }} />
      <Layout>
        <Header style={{ background: "#acf" }}>어드민</Header>
        <Content style={{ padding: 24 }}>asdsad</Content>
        <Footer
          style={{ textAlign: "center", fontSize: 12, background: "#eee" }}
        >
          TRIPOT ADMIN
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;

const { Header, Sider, Content, Footer } = Layout;
