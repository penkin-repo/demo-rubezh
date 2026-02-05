import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Vacancies from './pages/Vacancies';
import Projects from './pages/Projects';
import Equipment from './pages/Equipment';
import Contacts from './pages/Contacts';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vacancies" element={<Vacancies />} />
          <Route path="projects" element={<Projects />} />
          <Route path="equipment" element={<Equipment />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;