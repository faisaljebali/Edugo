import { coursConstants } from '../_constants';

export function cours(state = {}, action) {
    switch (action.type) {
        case coursConstants.GETALL_COURS_REQUEST:
            return {
                loading: true
            };
        case coursConstants.GETALL_COURS_SUCCESS:
            return {
                cours: action.cours
            };
        case coursConstants.GETALL_COURS_FAILURE:
            return {
                error: action.error
            };
        case coursConstants.GET_COURS_REQUEST:
            return {
                loading: true
            };
        case coursConstants.GET_COURS_SUCCESS:
            return {
                cours: action.cours
            };
        case coursConstants.GET_PROFS_REQUEST:
            return {
                loading: true
            };            
        case coursConstants.GET_PROFS_SUCCESS:
            return {
                profs: action.profs
            };  
        case coursConstants.GET_PROFS_FAILURE:
            return {
                error: action.error
            };                        
        case coursConstants.GET_COURS_FAILURE:
            return {
                error: action.error
            };          
        case coursConstants.GET_COACH_SUCCESS:
            return {
                profs: action.profs
            };              
        default:
            return state
    }
}