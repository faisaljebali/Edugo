import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { cours } from './cours.reducer';
import { alert } from './alert.reducer';
import { resetpassword } from './resetpassword.reducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    cours,
    resetpassword,
    alert
});

export default rootReducer;