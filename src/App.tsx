import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@components/pages/Home';
import About from '@components/pages/About';
import Layout from '@components/Layout';

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
