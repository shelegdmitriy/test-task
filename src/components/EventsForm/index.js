import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Button } from 'semantic-ui-react';

import { setCalendarEvent } from 'redux/reducers/calendar';

import { TextField } from 'components/redux-form-adapters';

class EventsForm extends Component {
  submitForm = (values) => {
    let arr = this.props.events || [];
    if (values.eventName && values.eventDate && values.eventTime) {
      arr.push(values);
      this.props.setCalendarEvent(arr);
    }
    this.props.closeModal();
  }
  resetForm = () => {
    this.props.reset();
  }
  render() {

    return (
      <Form onSubmit={this.props.handleSubmit(this.submitForm)}>
        <Field
          component={TextField}
          name="eventName"
          placeholder="enter name"
        />
        <Field
          component={TextField}
          name="eventDate"
          placeholder="enter date"
        />
        <Field
          component={TextField}
          name="eventTime"
          placeholder="enter time"
        />
        <Field
          component={TextField}
          name="eventNotes"
          placeholder="notes"
        />

        <Button onClick={this.resetForm}>Cancel</Button>
        <Button submit>Save</Button>
      </Form>
    );
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.eventName) {
    errors.eventName = 'Required'
  }

  return errors;
};

const setInitialValues = (values, editMode) => {
  if (editMode) {
    console.log('editMode', values);
    const editableValues = {
      eventName: values.event.title,
      eventDate: values.event.start.getDay(),
      eventTime: values.event.start.getTime(),
      // eventNotes: values.event.
    };
    return editableValues;
  }
  return {
    eventDate: values.dateStr,
  };
}

const mapStateToProps = (state, { columnData, editMode }) => {
  const selector = formValueSelector('EventForm');
  return {
    initialValues: setInitialValues(columnData, editMode),
    eventName: selector(state, 'eventName'),
    events: state.calendarReducer.events,
  };
}

export default connect(
  mapStateToProps,
  {
    setCalendarEvent,
  },
)(reduxForm({
  form: 'EventForm',
  validate,
  enableReinitialize: true,
})(EventsForm));
