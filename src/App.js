import React from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Interests from './components/Interests';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Navbar/>
        <About />
        <Interests />
      </div>
    </div>
  );
}

export default App;
