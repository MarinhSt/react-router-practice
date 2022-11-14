import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { blogData } from '../Data/BlogData'

const authContext = React.createContext()
function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [actualPost, setActualPost] = useState()
    const navigate = useNavigate()

    const edit = change => {
        setActualPost(change)
    }
    const saveChanges = change => {
        navigate(-1)
    }
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
        edit,
        saveChanges,
        actualPost,
    }
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

function useAuth(params) {
    const auth = useContext(authContext)
    return auth
}

const PrivateRoute = ({ children }) => {
    const { user } = useAuth()

    if (children.props.hide && user) {
        console.log(children.props.hide)
        return <Navigate to="/" />
    }

    if (!user && !children.props.hide) {
        return <Navigate to="/Login" />
    }
    return children

    // const { user } = useAuth()
    // if (route.private && !user) return null
    // console.log(children)
    // return children.children
}

export { AuthProvider, useAuth, PrivateRoute }
