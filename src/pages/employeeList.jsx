import {Link} from "react-router-dom";
import Table from "../components/Table";

export default function EmployeeList() {
    let table = []
    return(
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <Table table={table} />
            <Link to={'/'}  >
                Home
            </Link>
        </div>
    )
}
