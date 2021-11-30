import './style.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Queues from './pages/Queues'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/ >
        <Route path="/queues" element={<Queues />}/ >
      </Routes>
    </Router>
  );
}

export default App;
