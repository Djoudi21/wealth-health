import Form from "../components/Form";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Modal} from '@djoudi21/react-modal-oc'
import {setIsCreated} from "../store/employeeSlice";
import '../assets/css/index.css'

export default function Home() {
    const isCreated = useSelector(state => state.employee.isCreated)
    const dispatch = useDispatch()

    function closeModal(value){
        dispatch(setIsCreated(value))
    }

    return(
        <div className="container-fluid">
            <h1 className="display-1 p-lg-5 text-center">HR net</h1>
            <div className="container">
                <div className="mb-4 mt-4">
                    <Link to={'/employee-list'} >
                        View Current Employees
                    </Link>
                </div>
                <h2 className="mb-4">Create Employee</h2>
                <Form />
            </div>
            <Modal closeModal={closeModal} display={isCreated} />
        </div>
    )
}
