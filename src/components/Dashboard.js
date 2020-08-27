import React from 'react'
import {AppContext} from './Context/AppContext'

const Dashboard = () => {
    const {state} = useContext(AppContext)
    return (
        <div>
            <h1 className="mt-4">Dashboard</h1>
                <p class="lead mb-3">Welcome {state.user.name}</p>
                <a href="/users/logout" className="btn btn-secondary">Logout</a>
        </div>
    )
}

export default Dashboard


