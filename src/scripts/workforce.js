import {employeeList} from "./employeeList.js"
import { customerList } from "./customerList.js"


export const workforce = () => {
    return `<section class="employeeList">
    <div>Employees</div>
     ${employeeList()}
    </section>
    <section class="customerList">
    <div>Customers</div>
    ${customerList()}
    </section>`

}