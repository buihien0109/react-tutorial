import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import About from './features/About';
import Contact from './features/Contact';
import Home from './features/Home';
import Shop from './features/Shop';
import ManShop from './features/Shop/ManShop';
import WomanShop from './features/Shop/WomanShop';
import './App.css';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route>
          <Route path='shop/man' element={<ManShop />} />
          <Route path='shop/woman' element={<WomanShop />} />
        </Route>
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
      </Route>

    </Routes>
  );
}

export default App;
