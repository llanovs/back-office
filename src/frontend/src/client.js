import fetch from 'unfetch';

const checkStatus = response => {
    if (response.ok) {
        return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
}

export const getAllEmployees = () =>
    fetch("api/v1/employees")
        .then(checkStatus);


export const addEmployee = () =>
    fetch("api/v1/employees")
        .then(checkStatus);

export const deleteEmployee = () =>
    fetch("api/v1/employees/delete")
        .then(checkStatus);