
export const coursService = {
    getAll,
    getBySlug,
    getByIdUser,
    getAllProfs,
    getProfById
};

const apiUrl = 'https://learnonline.test';


//Get All Courses
function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetch(`${apiUrl}/api/cours/all`, requestOptions).then(handleResponse);
}

//Get Course By Slug
function getBySlug(slug) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetch(`${apiUrl}/api/cours/get/${slug}`, requestOptions).then(handleResponse);
}

//Get Course By Id User
function getByIdUser(id) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetch(`${apiUrl}/api/cours/my-cours/${id}`, requestOptions).then(handleResponse);
}


//Get All Profs
function getAllProfs() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetch(`${apiUrl}/api/cours/all-coachs`, requestOptions).then(handleResponse);
}

//Get Course By Id User
function getProfById(id) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    return fetch(`${apiUrl}/api/cours/get-coach/${id}`, requestOptions).then(handleResponse);
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        console.log(response.statusText);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                //location.reload(true);
            }
            var error ='';
            if(data && data.errors && data.errors.email){
                 error = data.errors.email;
            }else if(data && data.errors && data.errors.username){
                 error = data.errors.username;
            }else if(data && data.error && data.error == 'cours_empty'){
                 error = "Vous n'avez pas réservé aucun cours.";
            }else if(data && data.error && data.error == 'password_not_found'){
                error = 'Le mot de passe actuel est incorrect.';                 
            }else{
                 error = response.statusText; 
            }
            return Promise.reject(error);
        }

        return data;
    });
}


function handleResponseLogin(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                const error = "Nom d'utilisateur ou mot de passe invalide";
                return Promise.reject(error);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}