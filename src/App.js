import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/header';
import Profile from './views/Profile';
import Rockets from './views/Rockets';
import Missions from './views/Missions';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
