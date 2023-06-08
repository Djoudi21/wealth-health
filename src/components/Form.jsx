import {useState} from "react";
import Select from "./Select";
import Input from "./Input";
import {addEmployee} from "../store/employeesSlice";
import {useDispatch} from "react-redux";

export default function Form() {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [startDate, setStartDate] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [department, setDepartment] = useState('')
    const dispatch = useDispatch()

    const statesOptions = [
        {
            name: "Alabama",
            abbreviation: "AL"
        },
        {
            name: "Alaska",
            abbreviation: "AK"
        },
        {
            name: "American Samoa",
            abbreviation: "AS"
        },
        {
            name: "Arizona",
            abbreviation: "AZ"
        },
        {
            name: "Arkansas",
            abbreviation: "AR"
        },
        {
            name: "California",
            abbreviation: "CA"
        },
        {
            name: "Colorado",
            abbreviation: "CO"
        },
        {
            name: "Connecticut",
            abbreviation: "CT"
        },
        {
            name: "Delaware",
            abbreviation: "DE"
        },
        {
            name: "District Of Columbia",
            abbreviation: "DC"
        },
        {
            name: "Federated States Of Micronesia",
            abbreviation: "FM"
        },
        {
            name: "Florida",
            abbreviation: "FL"
        },
        {
            name: "Georgia",
            abbreviation: "GA"
        },
        {
            name: "Guam",
            abbreviation: "GU"
        },
        {
            name: "Hawaii",
            abbreviation: "HI"
        },
        {
            name: "Idaho",
            abbreviation: "ID"
        },
        {
            name: "Illinois",
            abbreviation: "IL"
        },
        {
            name: "Indiana",
            abbreviation: "IN"
        },
        {
            name: "Iowa",
            abbreviation: "IA"
        },
        {
            name: "Kansas",
            abbreviation: "KS"
        },
        {
            name: "Kentucky",
            abbreviation: "KY"
        },
        {
            name: "Louisiana",
            abbreviation: "LA"
        },
        {
            name: "Maine",
            abbreviation: "ME"
        },
        {
            name: "Marshall Islands",
            abbreviation: "MH"
        },
        {
            name: "Maryland",
            abbreviation: "MD"
        },
        {
            name: "Massachusetts",
            abbreviation: "MA"
        },
        {
            name: "Michigan",
            abbreviation: "MI"
        },
        {
            name: "Minnesota",
            abbreviation: "MN"
        },
        {
            name: "Mississippi",
            abbreviation: "MS"
        },
        {
            name: "Missouri",
            abbreviation: "MO"
        },
        {
            name: "Montana",
            abbreviation: "MT"
        },
        {
            name: "Nebraska",
            abbreviation: "NE"
        },
        {
            name: "Nevada",
            abbreviation: "NV"
        },
        {
            name: "New Hampshire",
            abbreviation: "NH"
        },
        {
            name: "New Jersey",
            abbreviation: "NJ"
        },
        {
            name: "New Mexico",
            abbreviation: "NM"
        },
        {
            name: "New York",
            abbreviation: "NY"
        },
        {
            name: "North Carolina",
            abbreviation: "NC"
        },
        {
            name: "North Dakota",
            abbreviation: "ND"
        },
        {
            name: "Northern Mariana Islands",
            abbreviation: "MP"
        },
        {
            name: "Ohio",
            abbreviation: "OH"
        },
        {
            name: "Oklahoma",
            abbreviation: "OK"
        },
        {
            name: "Oregon",
            abbreviation: "OR"
        },
        {
            name: "Palau",
            abbreviation: "PW"
        },
        {
            name: "Pennsylvania",
            abbreviation: "PA"
        },
        {
            name: "Puerto Rico",
            abbreviation: "PR"
        },
        {
            name: "Rhode Island",
            abbreviation: "RI"
        },
        {
            name: "South Carolina",
            abbreviation: "SC"
        },
        {
            name: "South Dakota",
            abbreviation: "SD"
        },
        {
            name: "Tennessee",
            abbreviation: "TN"
        },
        {
            name: "Texas",
            abbreviation: "TX"
        },
        {
            name: "Utah",
            abbreviation: "UT"
        },
        {
            name: "Vermont",
            abbreviation: "VT"
        },
        {
            name: "Virgin Islands",
            abbreviation: "VI"
        },
        {
            name: "Virginia",
            abbreviation: "VA"
        },
        {
            name: "Washington",
            abbreviation: "WA"
        },
        {
            name: "West Virginia",
            abbreviation: "WV"
        },
        {
            name: "Wisconsin",
            abbreviation: "WI"
        },
        {
            name: "Wyoming",
            abbreviation: "WY"
        }
    ];

    const departmentsOptions= [
        {
            name: 'Sales',
            abbreviation:''
        },
        {
            name: 'Marketing',
            abbreviation:''
        },
        {
            name: 'Engineering',
            abbreviation:''
        },
        {
            name: 'Human Resources',
            abbreviation:''
        },
        {
            name: 'Legal',
            abbreviation:''
        }
    ]

    function handleSubmit(event) {
        event.preventDefault()
        const employee = {
            firstname,
            lastname,
            dateOfBirth,
            startDate,
            street,
            city,
            state,
            zipCode,
            department
        }

        dispatch(addEmployee(employee))
    }

    function handleSetFirstname(data) {
        setFirstname(data)
    }

    function handleSetLastname(data) {
        setLastname(data)
    }

    function handleSetStreet(data) {
        setStreet(data)
    }

    function handleSetCity(data) {
        setCity(data)
    }

    function handleSetState(data) {
        setState(data)
    }

    function handleSetZipCode(data) {
        setZipCode(data)
    }

    function handleSetDepartment(data) {
        setDepartment(data)
    }

    return (
        <form onSubmit={handleSubmit} id="create-employee">

            {/*FIRSTNAME*/}
            <Input label={'First Name'} type={'text'} id={'first-name'} setInputValue={handleSetFirstname} />

            {/*LASTNAME*/}
            <Input label={'Last Name'} type={'text'} id={'last-name'} setInputValue={handleSetLastname} />


            {/*DATE OF BIRTH*/}
            <label htmlFor="date-of-birth">Date of Birth</label>
            <input onChange={ event => setDateOfBirth(event.target.value)}  id="date-of-birth" type="text" />

            {/*DATE*/}
            <label htmlFor="start-date">Start Date</label>
            <input onChange={ event => setStartDate(event.target.value)}  id="start-date" type="text" />

            {/*ADDRESS*/}
            <fieldset className="address">
                <legend>Address</legend>
                <Input label={'Street'} type={'text'} id={'street'} setInputValue={handleSetStreet} />
                <Input label={'City'} type={'text'} id={'city'} setInputValue={handleSetCity} />
                <Select options={statesOptions} label={'State'}  name={'states'} id={'states'} setSelectValue={handleSetState} />
                <Input label={'ZipCode'} type={'text'} id={'zip-code'} setInputValue={handleSetZipCode} />
            </fieldset>

            {/*DEPARTMENT*/}
            <Select options={departmentsOptions} label={'Departments'} name={'departments'} id={'departments'} setSelectValue={handleSetDepartment} />

            <button type="submit">Save</button>
        </form>
    )
}
