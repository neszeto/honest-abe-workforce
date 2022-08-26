import { setEmployees } from "./employeeComponents.js"

const API = "http://localhost:8088"

export const fetchEmployees = () => {
    return fetch(`${API}/employees`)
    .then(response => response.json())
    .then((employees) => setEmployees(employees))
}