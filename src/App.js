import './main.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Create from './components/create';
import BlogDetail from './components/BlogDetail';
import NotFound from './NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (

    <Router>
      <div className="app">

        <Navbar />

        <main className="main">
          <Routes>
            <Route path="/" element={< Main />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
