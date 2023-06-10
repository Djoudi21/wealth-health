import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import Table from "../components/Table";

export default function EmployeeList() {
    let employees = useSelector(state => state.employee.employees)
    function tableSection() {
        return employees.length ? <Table table={employees}/> : <div>No Employees found</div>
    }
    return(
        <div id="employee-div" className="container-fluid">
            <h1 className="display-1 p-lg-5 text-center">Current Employee</h1>
            <div className="container">
                <div className="mb-4 mt-4">
                    <Link to={'/'}  >
                        Home
                    </Link>
                </div>
                <h2 className="mb-4">Employee Informations</h2>
                {tableSection()}
            </div>
        </div>
    )
}
