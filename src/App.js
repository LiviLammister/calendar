import React, { Component } from "react";
import Calendar from "react-big-calendar";
import moment from "moment";

import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

import CustomEvent from "./components/custom-event"

Calendar.setLocalizer(Calendar.momentLocalizer(moment));

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      events: [
        {
          start: new Date(),
          end: new Date(moment().add(1, "hours")),
          title: "Some title"
        },
        {
          start: new Date(moment().add(1, "hours")),
          end: new Date(moment().add(2, "hours")),
          title: "Some Other title"
        }
      ]
    }
  } 

  render() {
    return (
      <div className="App">
        <Calendar
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh" }}
          selectable={true}
          components={{
            month: {
              event: CustomEvent
            }
          }}
        />
      </div>
    );
  }
}

export default App;