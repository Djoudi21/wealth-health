import React from 'react';
import { useForm } from '../hooks/useForm'

describe('use form hook', () => {
    let useForm
    beforeEach(() => {
        useForm = useForm()
    })
    it('should add an employee when submitting the form', () => {
        // const employee = {}
        useForm.handleSubmit()
        expect(true).toBe(false)
    })
})
