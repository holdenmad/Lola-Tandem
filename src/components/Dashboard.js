import React from 'react';
import {Link} from 'react-router-dom'
import EditProfile from './profile/EditProfile'

function Dashboard() {

    return (
        <div className="p-4">
            <div>
                <h1 className="mt-4">Dashboard</h1>
                <p className="lead mb-3">Welcome Username</p>
                <Link to="/users/login" className="btn btn-secondary">Logout</Link>
                <EditProfile/>
            </div>
        </div>
    );
}

export default Dashboard;





