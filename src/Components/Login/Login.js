import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/auth'

function Login(params) {
    const [userName, setUserName] = useState('')
    const { login } = useAuth()
    // const navigate = useNavigate()
    // const onLogin = e => console.log({ login: e, user: user })
    const onLogin = e => {
        login(userName)
        e.preventDefault()
    }
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={onLogin}>
                <label>Please, enter your userName</label>
                <input
                    id="user"
                    value={userName}
                    onChange={({ target }) => setUserName(target.value)}
                />
                <button type="submit">submit</button>
            </form>
        </>
    )
}

export { Login }
