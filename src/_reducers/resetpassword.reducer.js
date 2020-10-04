import { userConstants } from '../_constants';

export function resetpassword(state = {}, action) {
    switch (action.type) {
        case userConstants.FORGET_REQUEST:
            return { reseting: true };
        case userConstants.FORGET_SUCCESS:
            return {};
        case userConstants.FORGET_FAILURE:
            return {};
        default:
            return state
    }
}