import { setLocations } from "./employeeComponents.js"

const API = "http://localhost:8088"

export const fetchLocations = () => {
    return fetch(`${API}/locations`)
    .then(response => response.json())
    .then((locations) => setLocations(locations))
}