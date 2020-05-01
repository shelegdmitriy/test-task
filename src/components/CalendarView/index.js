import React, { PureComponent, Fragment, createRef } from 'react';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from '@fullcalendar/interaction'

import { Button, Popup } from 'semantic-ui-react'

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
// import '@fullcalendar/list/main.css';

class CalendarView extends PureComponent {
  contextRef = createRef();

  state = {
    currentView: "dayGridMonth"
  }

  handleDateClick = (data) => {
    console.log('handleDateClick', data);
    this.renderPopUp(data);
  }

  renderPopUp = (data) => (
    <Fragment>
      <Popup
        context={this.contextRef}
        content="Hey it works"
        open={true}
      />
      <td ref={this.contextRef} className={data.dayEl.className}>{data.dateStr}</td>
      {/* <div ref={this.contextRef}>{data.dayEl.outerHTML}</div> */}
    </Fragment>
  );


  handleViewChange = (view) => {
    this.setState({ currentView: view })
  }
  renderCalendarView = () => {
    console.log('renderCalendarView', this.state.currentView);
    return (
      <FullCalendar
        // header={{
        //   left: "prev,next today",
        //   center: "title",
        //   right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
        // }}
        dateClick={this.handleDateClick}
        defaultView={this.state.currentView}
        plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
      />
    )
  }

  render() {
    const { currentView } = this.state;
    const tabs = [
      { text: 'Month', view: 'dayGridMonth' },
      { text: 'Week', view: 'timeGridWeek' },
      { text: 'Day', view: 'timeGridDay' },
      { text: 'Agenda', view: 'listWeek' },
    ];

    // console.log(this.state.currentView);

    return (
      <div className="calendar-view__component">
        {/* <Button.Group>
          {tabs.map(i => (
            <Button
              key={`calendar_tab_${i.text.toLowerCase()}`}
              onClick={(_e) => { this.handleViewChange(i.view); }}
            >
              {i.text}
            </Button>
          ))}
        </Button.Group> */}

        <FullCalendar
          header={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
          }}
          dateClick={this.handleDateClick}
          defaultView="dayGridMonth"
          plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
          // select={this.handleSelect}
        />

        {/* {this.renderCalendarView()} */}
      </div>
    );
  }
}

export default CalendarView;
