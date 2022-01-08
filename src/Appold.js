import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {FaHome} from 'react-icons/fa'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About'
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className='container mx-auto px-3 pb-12'>
          <Routes>
            <Route path='/about' element={<About />} />
            {/* <Route path='/*' element={<NotFound />} /> */}
            <Route path='/notfound' element={<NotFound />} />
             <Route path={"/"} element={<Home />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>    
  );
}

export default App;
