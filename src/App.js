import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Service from './components/Service/Service';

function App() {
  return (
    <div className="App">
   <Header/>
   <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Service" element={<Service/>} />
          <Route path="/*" element="404 page not found" />
        </Routes>
    </div>
  );
}

export default App;