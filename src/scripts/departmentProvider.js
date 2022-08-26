
import { setDepartments } from "./employeeComponents.js"


const API = "http://localhost:8088"

export const fetchDepartments = () => {
   return fetch(`${API}/departments`)
    .then(response => response.json())
    .then((departments) => setDepartments(departments))
}