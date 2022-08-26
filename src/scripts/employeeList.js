import { getApplicationState } from "./employeeComponents.js"

/*employeeList.js
-this module is responsible for mapping through the employee list, finding what computer id matches the employee computer id's and listing both in html format


*/

export const employeeList = () => {
    let state =getApplicationState()
    let employees = state.employees
    let computers = state.computers
    let departments = state.departments
    let locations = state.locations
    let customers = state.customers
    let employeeCustomers = state.employeeCustomers

    return `<div class="employee">
        ${
            employees.map(employee => {
                const foundComputer = computers.find(computer => computer.id === employee.computerId)
                const foundDepartment = departments.find(department => department.id === employee.departmentId)
                const foundLocation = locations.find(location => location.id === employee.locationId)
                const relationships = employeeCustomers.filter(ec => ec.employeeId === employee.id) //returns array with all matching employeeIds and their subsequent customerIds
        
                    return `<header class="employee__name"></header>
                    <h1>${employee.firstName} ${employee.lastName}</h1>
                    </header>
                    <section class="employee__computer">
                    Currently using a ${foundComputer.year} ${foundComputer.model}
                    </section>
                    <section class="employee__department">
                    Works in the ${foundDepartment.name} department
                    </section>
                    <section class="employee__location">
                    Works at the ${foundLocation.name} office
                    </section>
                    <section class="employee__customers">
                    Has worked for the following customers.
                    <ul>
                    ${
                        relationships.map(relationship => {
                            const foundCustomers = customers.find(customer => customer.id === relationship.customerId)
                                return `<li>${foundCustomers.name}</li>`
                        }).join("")
                    }
                    </ul>
                    </section>`
                    
                         
                         
            }).join("")
        }
        </div>`

}




