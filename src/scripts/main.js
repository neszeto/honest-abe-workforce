import { fetchEmployees } from "./employeeProvider.js"
import { fetchComputers } from "./computerProvider.js"
import { workforce } from "./workforce.js"
import {fetchDepartments } from "./departmentProvider.js"
import {fetchLocations} from "./locationProvider.js"
import { fetchCustomers } from "./customerProvider.js"
import { fetchEmployeeCustomers } from "./employeeCustomerProvider.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchEmployees().then(() => fetchComputers())
    .then(() => fetchDepartments())
    .then(() => fetchLocations())
    .then(() =>fetchCustomers())
    .then(() => fetchEmployeeCustomers())
    .then(() => {
        mainContainer.innerHTML = workforce()
    })
}


render()

mainContainer.addEventListener("StateChanged",
    customEvent => {
        render()
    }
)


/* workforce.js
-this module is responsible for the overall html format for listing employees and their computers


computerProvider.js
-this module is responsible for fetching the computer data from api and putting it into applicationState


employeeProvider.js
-this module is responsible for fetching the employee data from api and putting it into applicationState

employeeList.js
-this module is responsible for mapping through the employee list, finding what computer id matches the employee computer id's and listing both in html format

main.js
-responsible for rendering the fetch calls and listening for state changes

employeeComponents.js
-responsible for housing applicationState and setter and getter functions 


*/