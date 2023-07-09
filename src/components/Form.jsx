import Select from "./Select";
import Input from "./Input";
import { useForm } from '../hooks/useForm'

export default function Form() {
    const form = useForm()
    return (
        <form onSubmit={form.handleSubmit} className="row g-3" id="create-employee">
            {/*FIRSTNAME*/}
            <Input  required label={'First Name'} type={'text'} id={'first-name'} setInputValue={form.handleSetFirstname} />

            {/*LASTNAME*/}
            <Input required label={'Last Name'} type={'text'} id={'last-name'} setInputValue={form.handleSetLastname} />


            {/*DATE OF BIRTH*/}
            <Input required label={'Date of Birth'} type={'date'} id={'date-of-birth'} setInputValue={form.handleSetDateOfBirth} />


            {/*START DATE*/}
            <Input required label={'Start date'} type={'date'} id={'start-date'} setInputValue={form.handleSetStartDate} />

            {/*ADDRESS*/}
            <Input required label={'Street'} type={'text'} id={'street'} setInputValue={form.handleSetStreet} />
            <Input required label={'City'} type={'text'} id={'city'} setInputValue={form.handleSetCity} />
            <Select required options={form.statesOptions} label={'State'}  name={'states'} id={'states'} setSelectValue={form.handleSetState} />
            <Input required label={'ZipCode'} type={'text'} id={'zip-code'} setInputValue={form.handleSetZipCode} />

            {/*DEPARTMENT*/}
            <Select required options={form.departmentsOptions} label={'Departments'} name={'departments'} id={'departments'} setSelectValue={form.handleSetDepartment} />
            <button className="btn btn-primary">Save</button>
        </form>
    )
}
