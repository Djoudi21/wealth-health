import {useState} from "react";
import {useDispatch} from "react-redux";
import {addEmployee, setIsCreated} from "../store/employeeSlice";

export const useForm = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [startDate, setStartDate] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [department, setDepartment] = useState('')
    const [firstnameMessageError, setFirstnameMessageError] = useState('')
    const [lastnameMessageError, setLastnameMessageError] = useState('')
    const [dateOfBirthMessageError, setDateOfBirthMessageError] = useState('')
    const [startDateMessageError, setStartDateMessageError] = useState('')
    const [streetMessageError, setStreetMessageError] = useState('')
    const [cityMessageError, setCityMessageError] = useState('')
    const [stateMessageError, setStateMessageError] = useState('')
    const [zipCodeMessageError, setZipCodeMessageError] = useState('')
    const [departmentMessageError, setDepartmentMessageError] = useState('')
    const dispatch = useDispatch()
    const statesOptions = [
        {
            name: "Select a value",
            abbreviation: ""
        },
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
            name: "Select a value",
            abbreviation: ""
        },
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
        const isValid = validateForm()
        if(!isValid) {
            return null
        }
        dispatch(addEmployee(employee))
        dispatch(setIsCreated(true))
    }

    function validateForm(){
        const isFirstnameValid = validateFirstname()
        const isLastnameValid = validateLastname()
        const isDateOfBirthValid = validateDateOfBirth()
        const isStartDateValid = validateStartDate()
        const isStreetValid = validateStreet()
        const isCityValid = validateCity()
        const isStateValid = validateState()
        const isZipCodeValid = validateZipCode()
        const isDepartmentValid = validateDepartment()
        return (
            isFirstnameValid &&
            isLastnameValid &&
            isDateOfBirthValid &&
            isStartDateValid &&
            isStreetValid &&
            isCityValid &&
            isStateValid &&
            isZipCodeValid &&
            isDepartmentValid
        )
    }

    function validateFirstname() {
         if(firstname.length === 0 ) {
         setFirstnameMessageError('Ajouter un prénom')
             return false
         } else {
             return true
         }
    }

    function validateLastname() {
        if(lastname.length === 0 ) {
            setLastnameMessageError('Ajouter un nom de famille')
            return false
        } else {
            return true
        }
    }

    function validateDateOfBirth() {
        if(dateOfBirth.length === 0 ) {
            setDateOfBirthMessageError('Ajouter une date de naissance')
            return false
        } else {
            return true
        }
    }

    function validateStartDate() {
        if(startDate.length === 0 ) {
            setStartDateMessageError('Ajouter une date de début')
            return false
        } else {
            return true
        }
    }

    function validateStreet() {
        if(street.length === 0 ) {
            setStreetMessageError('Ajouter une rue')
            return false
        } else {
            return true
        }
    }

    function validateCity() {
        if(city.length === 0 ) {
            setCityMessageError('Ajouter une ville')
            return false
        } else {
            return true
        }
    }

    function validateState() {
        if(state.length === 0 ) {
            setStateMessageError('Ajouter un état')
            return false
        } else {
            return true
        }
    }

    function validateZipCode() {
        if(zipCode.length === 0 ) {
            setZipCodeMessageError('Ajouter un code postal')
            return false
        } else {
            return true
        }
    }

    function validateDepartment() {
        if(department.length === 0 ) {
            setDepartmentMessageError('Ajouter un département')
            return false
        } else {
            return true
        }
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

    function handleSetDateOfBirth(data) {
        setDateOfBirth(data)
    }

    function handleSetStartDate(data) {
        setStartDate(data)
    }

    return {
        handleSetFirstname,
        handleSetLastname,
        handleSetStreet,
        handleSetCity,
        handleSetState,
        handleSetZipCode,
        handleSetDepartment,
        handleSetDateOfBirth,
        handleSetStartDate,
        handleSubmit,
        statesOptions,
        departmentsOptions,
        firstnameMessageError,
        setFirstnameMessageError,
        lastnameMessageError,
        setLastnameMessageError,
        dateOfBirthMessageError,
        setDateOfBirthMessageError,
        startDateMessageError,
        setStartDateMessageError,
        streetMessageError,
        setStreetMessageError,
        cityMessageError,
        setCityMessageError,
        stateMessageError,
        setStateMessageError,
        zipCodeMessageError,
        setZipCodeMessageError,
        departmentMessageError,
        setDepartmentMessageError,
    }
}
