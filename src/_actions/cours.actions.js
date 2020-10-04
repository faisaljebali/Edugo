import { coursConstants } from '../_constants';
import { coursService } from '../_services';


export const coursActions = {
    getAll,
    getCoursBySlug,
    getCoursByIdUser,
    getAllCoachs,
    getCoachById
};


//Get All Courses
function getAll() {
    return dispatch => {
        dispatch(request());

        coursService.getAll()
            .then(
                cours => dispatch(success(cours.cours)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: coursConstants.GETALL_COURS_REQUEST } }
    function success(cours) { return { type: coursConstants.GETALL_COURS_SUCCESS, cours } }
    function failure(error) { return { type: coursConstants.GETALL_COURS_FAILURE, error } }
}

//Get Cour by slug
function getCoursBySlug(slug) {
    return dispatch => {
        dispatch(request());

        coursService.getBySlug(slug)
            .then(
                cours => dispatch(success(cours.cours)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: coursConstants.GET_COURS_REQUEST } }
    function success(cours) { return { type: coursConstants.GET_COURS_SUCCESS, cours } }
    function failure(error) { return { type: coursConstants.GET_COURS_FAILURE, error } }
}

//Get Cour by Id User
function getCoursByIdUser(id) {
    return dispatch => {
        dispatch(request());

        coursService.getByIdUser(id)
            .then(
                cours => dispatch(success(cours.cours)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: coursConstants.GET_COURS_REQUEST } }
    function success(cours) { return { type: coursConstants.GET_COURS_SUCCESS, cours } }
    function failure(error) { return { type: coursConstants.GET_COURS_FAILURE, error } }
}


//Get All Profs
function getAllCoachs() {
    return dispatch => {
        dispatch(request());

        coursService.getAllProfs()
            .then(
                profs => dispatch(success(profs.profs)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: coursConstants.GET_PROFS_REQUEST } }
    function success(profs) { return { type: coursConstants.GET_PROFS_SUCCESS, profs } }
    function failure(error) { return { type: coursConstants.GET_PROFS_FAILURE, error } }
}


//Get Coach by Id 
function getCoachById(id) {
    return dispatch => {
        dispatch(request());

        coursService.getProfById(id)
            .then(
                cours => dispatch(success(cours.profs)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: coursConstants.GET_PROFS_REQUEST } }
    function success(profs) { return { type: coursConstants.GET_PROFS_SUCCESS, profs } }
    function failure(error) { return { type: coursConstants.GET_PROFS_FAILURE, error } }
}