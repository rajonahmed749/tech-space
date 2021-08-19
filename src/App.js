import './App.css';
import { Button } from 'antd';
import Home from './Components/Home/Home';
import Learning from './Components/Learning/Learning';
import AppHeader from './Components/common/Header'
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className='mainLayout'>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <AppHeader/>      
    </Header>
    {/* <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        Content
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
  </Layout>
  );
}

export default App;
