import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const authContext = React.createContext()
function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    const logout = () => {
        setUser(null)
        navigate('/')
    }

    const login = userName => {
        setUser({ userName })
        navigate('/Profile')
    }

    const auth = {
        user,
        login,
        logout,
    }
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

function useAuth(params) {
    const auth = useContext(authContext)
    return auth
}

export { AuthProvider, useAuth }
