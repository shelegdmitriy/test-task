import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';

import calendarReducer from './calendar';

export default combineReducers({
  calendarReducer,
  // form: formReducer,
});
