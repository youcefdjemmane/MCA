import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CollectionsPage from './pages/CollectionsPage';
import VisitReservationPage from './pages/VisitReservationPage';
import VirtualVisit from './pages/VirtualVisit';


// Placeholder components
const Home = () => <div className="p-6 text-center text-xl">Welcome to the Museum</div>;

function App() {
  return (
    <Router>
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">Museum</div>
        <div className="space-x-6">
          <Link to="/collections" className="text-gray-600 hover:text-gray-900">Collections</Link>
          <Link to="/reserve" className="text-gray-600 hover:text-gray-900">Reserve a Visit</Link>
          <Link to="/virtual" className="text-gray-600 hover:text-gray-900">Virtual Visit</Link>
        </div>
      </nav>

      <main className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/reserve" element={<VisitReservationPage />} />
          <Route path="/virtual" element={<VirtualVisit />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
