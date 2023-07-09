import Select from "./Select";
import Input from "./Input";
import { useForm } from '../hooks/useForm'

export default function Form() {
    const form = useForm()

    function handleDepartment(data) {
        form.handleSetDepartment(data)
        form.setDepartmentMessageError('')
    }

    function handleState(data) {
        form.handleSetState(data)
        form.setStateMessageError('')
    }
    return (
        <form onSubmit={form.handleSubmit} className="row g-3" id="create-employee">
            {/*FIRSTNAME*/}
            <Input resetErrorMessage={() =>form.setFirstnameMessageError('')} error={form.firstnameMessageError}  required label={'First Name'} type={'text'} id={'first-name'} setInputValue={form.handleSetFirstname} />

            {/*LASTNAME*/}
            <Input resetErrorMessage={() =>form.setLastnameMessageError('')} error={form.lastnameMessageError} required label={'Last Name'} type={'text'} id={'last-name'} setInputValue={form.handleSetLastname} />


            {/*DATE OF BIRTH*/}
            <Input resetErrorMessage={() =>form.setDateOfBirthMessageError('')} error={form.dateOfBirthMessageError} required label={'Date of Birth'} type={'date'} id={'date-of-birth'} setInputValue={form.handleSetDateOfBirth} />


            {/*START DATE*/}
            <Input resetErrorMessage={() =>form.setStartDateMessageError('')} error={form.startDateMessageError} required label={'Start date'} type={'date'} id={'start-date'} setInputValue={form.handleSetStartDate} />

            {/*ADDRESS*/}
            <Input resetErrorMessage={() =>form.setStreetMessageError('')} error={form.streetMessageError} required label={'Street'} type={'text'} id={'street'} setInputValue={form.handleSetStreet} />
            <Input resetErrorMessage={() =>form.setCityMessageError('')} error={form.cityMessageError} required label={'City'} type={'text'} id={'city'} setInputValue={form.handleSetCity} />
            <Select error={form.stateMessageError} required options={form.statesOptions} label={'State'}  name={'states'} id={'states'} setSelectValue={handleState} />
            <Input resetErrorMessage={() =>form.setZipCodeMessageError('')} error={form.zipCodeMessageError} required label={'ZipCode'} type={'text'} id={'zip-code'} setInputValue={form.handleSetZipCode} />

            {/*DEPARTMENT*/}
            <Select error={form.departmentMessageError} required options={form.departmentsOptions} label={'Departments'} name={'departments'} id={'departments'} setSelectValue={handleDepartment} />
            <button className="btn btn-primary">Save</button>

        </form>
    )
}
