import './style.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import QueuesPage from './pages/QueuesPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/ >
        <Route path="/queues" element={<QueuesPage />}/ >
      </Routes>
    </Router>
  );
}

export default App;
