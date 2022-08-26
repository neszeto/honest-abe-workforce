import { setComputers } from "./employeeComponents.js"

const API = "http://localhost:8088"

export const fetchComputers = () => {
    return fetch(`${API}/computers`)
    .then(response => response.json())
    .then ((computers) => setComputers(computers))
}