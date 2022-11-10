// import { useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/auth'

function Logout(params) {
    const { logout } = useAuth()

    // const navigate = useNavigate()

    // const onLogout = () => navigate('/')
    // setUser(null)

    return (
        <>
            <h1>Logout</h1>
            <form>
                <p>Are you sure ?</p>
                <button onClick={logout}>yes</button>
            </form>
        </>
    )
}

export { Logout }
