// import {useDispatch, useSelector} from "react-redux";
// import {setFirstname, setLastname} from "../store/employeeSlice";

import {useState} from "react";

export default function Form() {
    // const isLoggedIn = useSelector(state => state.employee.isLoggedIn)
    // const dispatch = useDispatch()
    // function handleFirstname(event) {
    //     event.preventDefault()
    //     dispatch(setFirstname(event.target.value))
    // }
    //
    // function handleLastname(event) {
    //     event.preventDefault()
    //     dispatch(setLastname(event.target.value))
    // }
    const states = [
        {
            "name": "Alabama",
            "abbreviation": "AL"
        },
        {
            "name": "Alaska",
            "abbreviation": "AK"
        },
        {
            "name": "American Samoa",
            "abbreviation": "AS"
        },
        {
            "name": "Arizona",
            "abbreviation": "AZ"
        },
        {
            "name": "Arkansas",
            "abbreviation": "AR"
        },
        {
            "name": "California",
            "abbreviation": "CA"
        },
        {
            "name": "Colorado",
            "abbreviation": "CO"
        },
        {
            "name": "Connecticut",
            "abbreviation": "CT"
        },
        {
            "name": "Delaware",
            "abbreviation": "DE"
        },
        {
            "name": "District Of Columbia",
            "abbreviation": "DC"
        },
        {
            "name": "Federated States Of Micronesia",
            "abbreviation": "FM"
        },
        {
            "name": "Florida",
            "abbreviation": "FL"
        },
        {
            "name": "Georgia",
            "abbreviation": "GA"
        },
        {
            "name": "Guam",
            "abbreviation": "GU"
        },
        {
            "name": "Hawaii",
            "abbreviation": "HI"
        },
        {
            "name": "Idaho",
            "abbreviation": "ID"
        },
        {
            "name": "Illinois",
            "abbreviation": "IL"
        },
        {
            "name": "Indiana",
            "abbreviation": "IN"
        },
        {
            "name": "Iowa",
            "abbreviation": "IA"
        },
        {
            "name": "Kansas",
            "abbreviation": "KS"
        },
        {
            "name": "Kentucky",
            "abbreviation": "KY"
        },
        {
            "name": "Louisiana",
            "abbreviation": "LA"
        },
        {
            "name": "Maine",
            "abbreviation": "ME"
        },
        {
            "name": "Marshall Islands",
            "abbreviation": "MH"
        },
        {
            "name": "Maryland",
            "abbreviation": "MD"
        },
        {
            "name": "Massachusetts",
            "abbreviation": "MA"
        },
        {
            "name": "Michigan",
            "abbreviation": "MI"
        },
        {
            "name": "Minnesota",
            "abbreviation": "MN"
        },
        {
            "name": "Mississippi",
            "abbreviation": "MS"
        },
        {
            "name": "Missouri",
            "abbreviation": "MO"
        },
        {
            "name": "Montana",
            "abbreviation": "MT"
        },
        {
            "name": "Nebraska",
            "abbreviation": "NE"
        },
        {
            "name": "Nevada",
            "abbreviation": "NV"
        },
        {
            "name": "New Hampshire",
            "abbreviation": "NH"
        },
        {
            "name": "New Jersey",
            "abbreviation": "NJ"
        },
        {
            "name": "New Mexico",
            "abbreviation": "NM"
        },
        {
            "name": "New York",
            "abbreviation": "NY"
        },
        {
            "name": "North Carolina",
            "abbreviation": "NC"
        },
        {
            "name": "North Dakota",
            "abbreviation": "ND"
        },
        {
            "name": "Northern Mariana Islands",
            "abbreviation": "MP"
        },
        {
            "name": "Ohio",
            "abbreviation": "OH"
        },
        {
            "name": "Oklahoma",
            "abbreviation": "OK"
        },
        {
            "name": "Oregon",
            "abbreviation": "OR"
        },
        {
            "name": "Palau",
            "abbreviation": "PW"
        },
        {
            "name": "Pennsylvania",
            "abbreviation": "PA"
        },
        {
            "name": "Puerto Rico",
            "abbreviation": "PR"
        },
        {
            "name": "Rhode Island",
            "abbreviation": "RI"
        },
        {
            "name": "South Carolina",
            "abbreviation": "SC"
        },
        {
            "name": "South Dakota",
            "abbreviation": "SD"
        },
        {
            "name": "Tennessee",
            "abbreviation": "TN"
        },
        {
            "name": "Texas",
            "abbreviation": "TX"
        },
        {
            "name": "Utah",
            "abbreviation": "UT"
        },
        {
            "name": "Vermont",
            "abbreviation": "VT"
        },
        {
            "name": "Virgin Islands",
            "abbreviation": "VI"
        },
        {
            "name": "Virginia",
            "abbreviation": "VA"
        },
        {
            "name": "Washington",
            "abbreviation": "WA"
        },
        {
            "name": "West Virginia",
            "abbreviation": "WV"
        },
        {
            "name": "Wisconsin",
            "abbreviation": "WI"
        },
        {
            "name": "Wyoming",
            "abbreviation": "WY"
        }
    ];

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [startDate, setStartDate] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [department, setDepartment] = useState('')

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

        console.log('VALUES', employee)
    }

    return (
        <form onSubmit={handleSubmit} id="create-employee">

            {/*FIRSTNAME*/}
            <label htmlFor="first-name">First Name</label>
            <input onChange={event => setFirstname(event.target.value)} type="text" id="first-name" />

            {/*LASTNAME*/}
            <label htmlFor="last-name">Last Name</label>
            <input onChange={event => setLastname(event.target.value)} type="text" id="last-name" />

            {/*DATE OF BIRTH*/}
            <label htmlFor="date-of-birth">Date of Birth</label>
            <input onChange={ event => setDateOfBirth(event.target.value)}  id="date-of-birth" type="text" />

            {/*DATE*/}
            <label htmlFor="start-date">Start Date</label>
            <input onChange={ event => setStartDate(event.target.value)}  id="start-date" type="text" />

            {/*ADDRESS*/}
            <fieldset className="address">
                <legend>Address</legend>

                <label htmlFor="street">Street</label>
                <input onChange={ event => setStreet(event.target.value)} id="street" type="text"/>

                <label htmlFor="city">City</label>
                <input onChange={ event => setCity(event.target.value)}  id="city" type="text"/>

                <label htmlFor="state">State</label>
                <select onChange={ event => setState(event.target.value)}  name="state" id="state">
                    {states.map((state, index) => {
                        return (
                            <option value={state.abbreviation} key={index}>{state.name}</option>
                        )
                    })}
                </select>

                <label htmlFor="zip-code">Zip Code</label>
                <input onChange={ event => setZipCode(event.target.value)}  id="zip-code" type="number"/>
            </fieldset>

            {/*SELECT*/}
            <label htmlFor="department">Department</label>
            <select onChange={ event => setDepartment(event.target.value)}  name="department" id="department">
                <option>Sales</option>
                <option>Marketing</option>
                <option>Engineering</option>
                <option>Human Resources</option>
                <option>Legal</option>
            </select>

            <button type="submit">Save</button>
        </form>
    )
}
