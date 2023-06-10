import { createSlice } from '@reduxjs/toolkit'

export const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        employees: [],
        firstname: '',
        lastname: '',
        dateOfBirth: '',
        startDate: '',
        department: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        isCreated: false
    },
    reducers: {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        setFirstname: (state, action) => {
            state.firstname =  action.payload
        },

        setLastname: (state, action) => {
            state.lastname =  action.payload
        },

        setDateOfBirth: (state, action) => {
            state.dateOfBirth =  action.payload
        },

        setStartDate: (state, action) => {
            state.startDate =  action.payload
        },

        setStreet: (state, action) => {
            state.street =  action.payload
        },

        setCity: (state, action) => {
            state.city =  action.payload
        },

        setState: (state, action) => {
            state.state =  action.payload
        },

        setZipCode: (state, action) => {
            state.zipCode =  action.payload
        },

        setDepartment: (state, action) => {
            state.department =  action.payload
        },

        setIsCreated: (state, action) => {
            state.isCreated =  action.payload
        },

        addEmployee: (state, action) => {
            state.employees = [...state.employees, action.payload]
        }
    }
})

// Action creators are generated for each case reducer function
export const {
    setFirstname,
    setLastname,
    setDateOfBirth,
    setStartDate,
    setStreet,
    setCity,
    setState,
    setZipCode,
    setDepartment,
    setIsCreated,
    addEmployee,
} = employeeSlice.actions

export default employeeSlice.reducer
