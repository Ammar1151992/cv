import FormFields from './components/CVs'
import { Layout, Flex} from 'antd';

const { Header, Footer, Content } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#37474F',
};

const contentStyle = {
  minHeight: 120,
  maxWidth: 'calc(80% - 10px)',
  margin:'auto'
};

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
};
const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  maxWidth: 'calc(55% - 10px)',
  margin: 'auto',
  padding: '10px'
};

function App() {
  return (
    <>
    <Flex gap="middle">
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>CV</Header>
      <Content style={contentStyle}> <FormFields /></Content>
      <Footer style={footerStyle}> </Footer>
    </Layout>
    </Flex>
    </>
  )
}

export default App
