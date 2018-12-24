
// Redux
import { combineReducers } from 'redux';

import perkSimManager from 'reducers/perkSimManager';

const AppReducer = combineReducers({
  perkSimManager,
});

export default AppReducer;
