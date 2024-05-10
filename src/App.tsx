import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@components/pages/Home';
import Layout from '@components/Layout';

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
