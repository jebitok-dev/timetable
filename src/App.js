import React from 'react';
import Header from './components/header/header.components';
import Class from './components/classes/class.component';
import Days from './components/days/day.component'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-header">
        <h2>School Timetable</h2>
      </div>
      <Class />
      <Days />
    </div>
  );
}

export default App;
