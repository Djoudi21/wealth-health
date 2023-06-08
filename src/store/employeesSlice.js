import { createSlice } from '@reduxjs/toolkit'

export const employeesSlice = createSlice({
    name: 'employees',
    initialState: {
        value: []
    },    reducers: {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        addEmployee: (state, action) => {
            console.log(action.payload)
            console.log(state.value)
            // return [...state, action.payload];

            // state.value.push(action.payload)
        }
    }
})

// Action creators are generated for each case reducer function
export const {
    addEmployee
} = employeesSlice.actions

export default employeesSlice.reducer
