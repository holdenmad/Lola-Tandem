import React from 'react'
import { Link } from "react-router-dom";

// import {AppContext} from './Context/AppContext'

const Dashboard = () => {
    // const {state} = useContext(AppContext)
    return (
        <div>
            <h1 className="mt-4">Dashboard</h1>
                <p class="lead mb-3">Welcome Username</p>
                <Link to="/users/logout" className="btn btn-secondary">Logout</Link>
        </div>
    )
}

export default Dashboard


