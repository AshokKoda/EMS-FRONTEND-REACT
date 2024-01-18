import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { createEmployee } from '../services/EmployeeService';

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const navigator = useNavigate();

    function saveEmployee(e) {
        e.preventDefault();

        const employee = { firstName, lastName, email }
        console.log(employee);

        createEmployee(employee).then((response) => {
            console.log(response.data);
            navigator('/employees')
        })
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
                                <input className='form-control' type='text' placeholder='Enter First name'
                                    name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)}>
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name:</label>
                                <input className='form-control' type='text' placeholder='Enter Last name'
                                    name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)}>
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Email-ID:</label>
                                <input className='form-control' type='email' placeholder='Enter Your Email-ID'
                                    name='email' value={email} onChange={(e) => setEmail(e.target.value)}>
                                </input>
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