import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteDepartment, getAllDepartments } from "../services/DepartmentService";

const ListDepartmentComponent = () => {

    const [departments, setDepartments] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        listOfDepartments();
    }, [])

    function listOfDepartments() {
        getAllDepartments().then((response) => {
            console.log(response.data);
            setDepartments(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function updateDepartment(id) {
        navigator(`/edit-department/${id}`)
    }

    function removeDepartment(id) {
        deleteDepartment(id).then((response) => {
            console.log(response.data);
            listOfDepartments();
        }).catch(error => {
            console.error(error);
        })
    }

    return (
        <div className='container'>
            <h2 className='text-center'>LIST OF DEPARTMENTS</h2>
            <Link to='/add-department' className='btn btn-primary mb-2'>Add Department</Link>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Department</th>
                        <th>Description</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        departments.map(dept =>
                            <tr key={dept.id}>
                                <td>{dept.id}</td>
                                <td>{dept.departmentName}</td>
                                <td>{dept.departmentDescription}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateDepartment(dept.id)}>Update</button>
                                    <button className='btn btn-danger' onClick={() => removeDepartment(dept.id)}
                                        style={{ marginLeft: '10px' }}
                                    >Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListDepartmentComponent