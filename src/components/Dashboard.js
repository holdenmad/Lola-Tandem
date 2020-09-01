import React from 'react';

import { accountService } from './settings/node_modules/@/_services';
import UserProfile  from '../userProfile';

function Home() {
    const user = accountService.userValue;
    
    return (
        <div className="p-4">
            <div className="container">
                <h1>Hi {user.firstName}!</h1>
                <p>You're logged in with React & JWT!!</p>
                <UserProfile />
            </div>
        </div>
    );
}

export { Home };


// import React from 'react'
// import { Link } from "react-router-dom";

// // import {AppContext} from './Context/AppContext'

// const Dashboard = () => {
//     // const {state} = useContext(AppContext)
//     return (
//         <div>
//             <h1 className="mt-4">Dashboard</h1>
//                 <p class="lead mb-3">Welcome Username</p>
//                 <Link to="/users/logout" className="btn btn-secondary">Logout</Link>
//         </div>
//     )
// }

// export default Dashboard


