const applicationState = {
    employees: [],
    computers: [],
    departments: [],
    locations: [],
    customers: [],
    employeeCustomers: []

}


//setter functions to set database into applicationState
export const setComputers = (computersdata) => {
    applicationState.computers = computersdata
}

export const setEmployees = (employeesdata) => {
    applicationState.employees = employeesdata
}

export const setDepartments = (departmentsdata) => {
    applicationState.departments = departmentsdata
}

export const setLocations = (locationsdata) => {
    applicationState.locations = locationsdata
}

export const setCustomers = (customersdata) => {
    applicationState.customers = customersdata
}

export const setEmployeeCustomers = (employeecustomersdata) => {
    applicationState.employeeCustomers = employeecustomersdata
}
    


//getter function for applicationState
export const getApplicationState = () => {
    return structuredClone(applicationState)
}