import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth7730Saga from '../features/EmailAuth7730/redux/sagas';
import CalendarView7729Saga from '../features/CalendarView7729/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth7730Saga,
CalendarView7729Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}