import React, { Component } from "react";
import Calendar from "react-big-calendar";
import moment from "moment";

import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

import CustomEvent from "./components/custom-event"
import events from './events'

Calendar.setLocalizer(Calendar.momentLocalizer(moment));

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  } 

  render() {
    //const {events} = this.state
    return (
      <div className="App">
        <Calendar
          defaultDate={new Date()}
          defaultView="month"
          views={["month"]}
          events={events}
          style={{ height: "100vh" }}
          selectable={true}
          components={{
            month: {
              event: CustomEvent,
            },
          }}
        />
      </div>
    );
  }
}

export default App;