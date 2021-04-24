import fetch from 'unfetch';

const checkStatus = response => {
    if (response.ok) {
        return response;
    }
    //Convert non 2-xx HTTP responses into errors
    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
}

export const getAllEmployees = () =>
    fetch("api/v1/employees")
        .then(checkStatus);

export const getEmployeeById = (employeeId) =>
    fetch(`api/v1/employees/${employeeId}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "GET",
    }).then(checkStatus);

export const addEmployee = employee =>
    fetch("api/v1/employees/add", {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(employee)
    }).then(checkStatus);


export const updateEmployee = employee =>
    fetch("api/v1/employees/update", {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(employee)
    }).then(checkStatus);


export const deleteEmployee = (employeeId) =>
    fetch(`api/v1/employees/delete/${employeeId}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "DELETE",
    }).then(checkStatus);