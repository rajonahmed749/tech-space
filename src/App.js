import './App.css';
import AppHeader from './Components/common/Header'
import { Layout, Menu, Breadcrumb } from 'antd';
import Home from './Components/views/Home';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className='mainLayout'>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <AppHeader />
      </Header>
      <Content >
        <Home />
      </Content>
    </Layout>
  );
}

export default App;
