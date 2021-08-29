import './App.css';
import AppHeader from './Components/common/Header'
import AppFooter from './Components/common/Footer'
import { Layout } from 'antd';
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
      <Footer>
        <AppFooter/>
      </Footer>
    </Layout>
  );
}

export default App;
