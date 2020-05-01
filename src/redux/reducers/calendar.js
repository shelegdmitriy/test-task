
const initialState = {
  siteLoading: false,
  events: [],
};

const SITE_LOADING = 'SITE_LOADING';
const ADD_EVENT = 'test-task/calendar/add-event';

export default (state = initialState, action) => {
  switch (action.type) {
    case SITE_LOADING:
      return {
        ...state,
        siteLoading: action.payload,
      };
    case ADD_EVENT:
      return {
        ...state,
        events: action.payload,
      };
    default:
      return state;
  }
}

export const setCalendarEvent = event => (dispatch) => {
  dispatch({
    type: ADD_EVENT,
    payload: event,
  });
}
