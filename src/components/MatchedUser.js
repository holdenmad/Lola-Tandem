import React from 'react'

const MatchedUser = ({match: {user}}) => {
    return (
        <div>
            {`My name is ${user.name}`}
        </div>
    )
}

export default MatchedUser