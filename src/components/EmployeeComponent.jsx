import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { createEmployee } from '../services/EmployeeService';

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const navigator = useNavigate();

    //Form Validation
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    function validateForm() {
        let valid = true;
        const errorsCopy = { ...errors }

        if (firstName.trim()) {
            errorsCopy.firstName = '';
        } else {
            errorsCopy.firstName = 'First name is required';
            valid = false;
        }

        if (lastName.trim()) {
            errorsCopy.lastName = '';
        } else {
            errorsCopy.lastName = 'Last name is required';
            valid = false;
        }

        if (email.trim()) {
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Email is required';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }

    function saveEmployee(e) {
        e.preventDefault();

        if (validateForm()) {
            const employee = { firstName, lastName, email }
            console.log(employee);

            createEmployee(employee).then((response) => {
                console.log(response.data);
                navigator('/employees')
            })
        }
    }

    return (
        <div className='container'>
            <br /><br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'>ADD EMPLOYEE</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name:</label>
                                <input className= {`form-control ${errors.firstName ? 'is-invalid' : '' }`} type='text' placeholder='Enter First name'
                                    name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)}>
                                </input>
                                { errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name:</label>
                                <input className={`form-control ${errors.lastName ? 'is-invalid' : '' }`} type='text' placeholder='Enter Last name'
                                    name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)}>
                                </input>
                                { errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Email-ID:</label>
                                <input className={`form-control ${errors.email ? 'is-invalid' : '' }`} type='email' placeholder='Enter Your Email-ID'
                                    name='email' value={email} onChange={(e) => setEmail(e.target.value)}>
                                </input>
                                { errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                            </div>
                            <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeComponent