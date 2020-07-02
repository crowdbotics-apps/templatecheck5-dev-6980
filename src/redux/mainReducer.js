import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth7730Reducer from '../features/EmailAuth7730/redux/reducers';
import CalendarView7729Reducer from '../features/CalendarView7729/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth7730: EmailAuth7730Reducer,
CalendarView7729: CalendarView7729Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});