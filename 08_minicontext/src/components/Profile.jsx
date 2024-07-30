import React, {useContext} from 'react'
import Context from '../context/Context'

function Profile()
{
    const {user} = useContext(Context)
    

    if(!user) return <div>Login Please</div>

    return <div>Welcome {user.username}</div>
}

export default Profile;