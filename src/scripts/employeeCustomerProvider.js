import { setEmployeeCustomers } from "./employeeComponents.js"

const API = "http://localhost:8088"

export const fetchEmployeeCustomers = () => {
    return fetch(`${API}/employeeCustomers`)
    .then(response => response.json())
    .then((employeeCustomers) => setEmployeeCustomers(employeeCustomers))
}