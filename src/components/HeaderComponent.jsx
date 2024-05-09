import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">EMS</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/employees">Employees</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/departments">Departments</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default HeaderComponent