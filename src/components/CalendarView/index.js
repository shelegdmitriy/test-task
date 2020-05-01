import React, { PureComponent, Fragment, createRef } from 'react';
import { connect } from 'react-redux';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from '@fullcalendar/interaction'
// import addEvent from

import { Button, Modal } from 'semantic-ui-react'

import EventsForm from 'components/EventsForm';

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';

class CalendarView extends PureComponent {
  calendarRef = createRef();

  state = {
    currentView: "dayGridMonth",
    modal: null,
    modalOpen: false,
    eventData: null,
    modalEditOpen: false,
  }

  componentDidMount() {
    this.calendarRef.current.getApi().getEvents();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.events !== this.props.events) {
      this.calendarRef.current.getApi().getEvents();
    }
  }

  handleDateClick = (data) => {

    this.setState({
      modalOpen: true,
      eventData: data,
    })
  }
  handleEventClick = (data) => {
    this.setState({
      modalEditOpen: true,
      eventData: data,
    });
  }

  handleModalOpen = (data) => (
    <Modal
      open={this.state.modalOpen}
      onClose={() => { this.setState({ modalOpen: false }); }}
    >
      <Modal.Content>
        <EventsForm
          handler={this.calendarRef.current}
          editMode={false}
          columnData={data}
          handleCreateEvent={this.state.apiHandler}
          closeModal={() => { this.setState({ modalOpen: false }); }}
        />
      </Modal.Content>
    </Modal>
  );

  handleEditModalOpen = (data) => (
    <Modal
      open={this.state.modalEditOpen}
      onClose={() => { this.setState({ modalEditOpen: false }); }}
    >
      <Modal.Content>
        <EventsForm
          editMode
          columnData={data}
          handleCreateEvent={this.state.apiHandler}
          closeModal={() => { this.setState({ modalEditOpen: false }); }}
        />
      </Modal.Content>
    </Modal>
  );

  handleViewChange = (view) => {
    this.setState({ currentView: view })
  }

  handleEventChange = (event) => {
    const addSomeEvent = this.calendarRef.current.getApi();
    return addSomeEvent[event];
  }
  render() {
    const { events } = this.props;

    const handleEvents = events && events.length > 0 ?
      events.map(i => (
        {
          title: i.eventName,
          start: i.eventDate,
          end: 'allDay',
        }
      )) : [];

    return (
      <div className="calendar-view__component">
        <h3>Calendar View</h3>

        <FullCalendar
          ref={this.calendarRef}
          header={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
          }}
          dateClick={this.handleDateClick}
          defaultView="dayGridMonth"
          plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
          events={handleEvents}
          eventClick={this.handleEventClick}
        />

          {this.handleModalOpen(this.state.eventData)}
          {this.handleEditModalOpen(this.state.eventData)}

      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    events: state.calendarReducer.events,
  }
);

export default connect(
  mapStateToProps,
  null,
)(CalendarView);
