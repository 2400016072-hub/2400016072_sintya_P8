import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

     <div className="container mx-auto p-4">
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/projects" element={<Projects />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="*" element={<div className="text-center mt-10">404 - Halaman Tidak Ditemukan</div>} />
       </Routes>
     </div>
    </div>
  );
}
