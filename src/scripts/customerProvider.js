import { setCustomers } from "./employeeComponents.js"

const API = "http://localhost:8088"

export const fetchCustomers = () => {
    return fetch(`${API}/customers`)
    .then(response => response.json())
    .then((customers) => setCustomers(customers))
}