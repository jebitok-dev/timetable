import React, { Component } from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import BigCalendar from 'react'
// import Header from './components/header/header.components';
// import Class from './components/classes/class.component';
// import Days from './components/days/day.component'
import './App.css';

require('style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css')

class App extends Component {
  constructor () {
    super()
  }
  render () {
    return (
      <div className="App">
        <BigCalendar
        style={{height: '420px'}}
        events={[]}
        />
        {/* <Header />
        <div className="App-header">
          <h2>School Timetable</h2>
        </div>
        <Class /> */}
        {/* <Days /> */}
      </div>
    );
  }
}

export default App;
