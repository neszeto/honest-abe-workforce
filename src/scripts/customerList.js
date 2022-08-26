import { getApplicationState } from "./employeeComponents.js"

export const customerList = () => {
    let state = getApplicationState()
    let employees = state.employees
    let customers = state.customers
    let employeeCustomers = state.employeeCustomers

    return `<div class="employee">
    ${
        customers.map(customer => {
            const relationships = employeeCustomers.filter(ec => ec.customerId === customer.id) //returns ec array with matching customerIds and paired employeeId
            
            return `<h2>${customer.name}</h2>
                ${
                    relationships.map(relationship => {
                        const foundEmployee = employees.find(employee => employee.id === relationship.employeeId)
                            return `<li>${foundEmployee.firstName} ${foundEmployee.lastName}</li>`
                    }).join("")
                }
            </div>`
        }).join("")
    }
    </div>`

}