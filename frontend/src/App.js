
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Main from './Main';
import ClientLogin from './client/ClientLogin';
import ServerLogin from './server/ServerLogin';
import ClientMain from './client/CLientMain';
import ServerMain from './server/ServerMain';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/client/login' element={<ClientLogin />} />
        <Route path='/client' element={<ClientMain />} />
        <Route path='/server/login' element={<ServerLogin />} />
        <Route path='/server' element={<ServerMain />} />
      </Routes>
    </Router>
  );
}

export default App;
