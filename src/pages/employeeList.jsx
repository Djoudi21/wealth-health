import {Link} from "react-router-dom";
// import Table from "../components/Table";
import {useSelector} from "react-redux";

export default function EmployeeList() {
    let employees = useSelector(state => state.employees.employees)
    console.log('TOTO', employees)
    return(
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            {/*<Table table={employees} />*/}
            <Link to={'/'}  >
                Home
            </Link>
        </div>
    )
}
