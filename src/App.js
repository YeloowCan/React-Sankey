import { Layout, Menu } from 'antd';
import Sankey1 from './components/Sankey1';
import 'antd/dist/reset.css';
import './App.css';

const { Sider, Content } = Layout;

const MenuItem = [
  {
    key: '1',
    label: '桑基图1',
  },
  {
    key: '2',
    label: '桑基图2',
  },
  {
    key: '3',
    label: '桑基图3',
  },
];

function App() {
  return (
    <div className="App">
      <Layout style={{ height: '100%' }}>
        <Sider>
          <Menu
            theme="dark"
            defaultSelectedKeys={['1']}
            mode="inline"
            items={MenuItem}
          />
        </Sider>
        <Layout>
          <Content style={{ padding: 12 }}>
            <Sankey1 />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
