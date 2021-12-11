import './style.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import QueuesPage from './pages/QueuesPage'
import EditQueue from './pages/EditQueue'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/ >
        <Route path="/queues" element={<QueuesPage />}/ >
        <Route path="/config/:id" element={<EditQueue />} />
      </Routes>
    </Router>
  );
}

export default App;
