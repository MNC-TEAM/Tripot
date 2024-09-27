import { Avatar, Layout, Menu, MenuProps } from "antd";
import { Typography } from "antd";
import {
  IoAppsSharp,
  IoChatbubblesOutline,
  IoPeopleSharp,
  IoSettingsSharp,
} from "react-icons/io5";

const App = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider width="200" style={{ background: "#fff" }}>
        <Title level={4} style={{ textAlign: "center" }}>
          Logo
        </Title>
        <Menu mode="inline" items={items} style={{ marginTop: 24 }} />
      </Sider>
      <Layout>
        <Header
          style={{
            background: "#acf",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Avatar>U</Avatar>
        </Header>
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

type MenuItem = Required<MenuProps>["items"][number];

const { Header, Sider, Content, Footer } = Layout;

const { Title } = Typography;

const items: MenuItem[] = [
  {
    key: "sub1",
    label: "Dashboard",
    icon: <IoAppsSharp />,
  },
  {
    key: "sub2",
    label: "Story",
    icon: <IoChatbubblesOutline />,
  },
  {
    key: "sub3",
    label: "User",
    icon: <IoPeopleSharp />,
  },
  {
    key: "sub4",
    label: "Settings",
    icon: <IoSettingsSharp />,
  },
];
