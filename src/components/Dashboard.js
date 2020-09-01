import React from 'react';

function Dashboard() {

    return (
        <div className="p-4">
            <div>
                <h1 className="mt-4">Dashboard</h1>
                <p class="lead mb-3">Welcome Username</p>
                <Link to="/users/logout" className="btn btn-secondary">Logout</Link>
            </div>
        </div>
    );
}

export default Dashboard;





