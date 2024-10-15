import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import UpcomingEvents from './components/upcomingEvents'; 
import RecentEvents from './components/recentEvents'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <UpcomingEvents/>
        <RecentEvents/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
