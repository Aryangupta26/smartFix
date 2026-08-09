import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import MobileCTA from './components/MobileCTA.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Courses from './pages/Courses.tsx';
import CourseDetails from './pages/CourseDetails.tsx';
import Gallery from './pages/Gallery.tsx';
import Reviews from './pages/Reviews.tsx';
import Contact from './pages/Contact.tsx';
import Privacy from './pages/Privacy.tsx';
import Terms from './pages/Terms.tsx';

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen bg-[#111111] text-slate-100 transition-colors duration-300 pb-16 md:pb-0">
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug" element={<CourseDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>

      {!isHome && <Footer />}
      <MobileCTA />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
