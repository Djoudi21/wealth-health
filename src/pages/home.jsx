import Modal from "../components/Modal";
import Form from "../components/Form";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

export default function Home() {
    const isCreated = useSelector(state => state.employee.isCreated)
    function saveEmployee() {
    }

    return(
        <div>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                {/*className={`${stylesIndex.flexCenter}`}*/}
                <Link to={'/employee-list'}  >
                    View Current Employees
                </Link>
                <h2>Create Employee</h2>
                <Form />
            </div>
            {isCreated}
            <Modal displayModal={isCreated} text={'toto'} />
        </div>
    )
}
