import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { blogData } from '../Data/BlogData'

const authContext = React.createContext()
function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [postList, setPostList] = useState(blogData)
    const [actualPost, setActualPost] = useState()
    const [from, setFrom] = useState()
    const navigate = useNavigate()

    const goBack = () => {
        navigate(from)
    }
    const edit = post => {
        setActualPost(post)
    }
    const saveChanges = postChanges => {
        const updatePostList = postList.map(post => {
            if (post.slug === postChanges.slug) return (post = postChanges)
            else return post
        })
        console.log({ updatePostList })
        setPostList(updatePostList)
        // setActualPost(postChanges)
        navigate(from)
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
        postList,
        setPostList,
        from,
        setFrom,
        goBack,
    }
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

function useAuth() {
    const auth = useContext(authContext)
    return auth
}

const PrivateRoute = ({ children }) => {
    const { user } = useAuth()

    if (children.props.hide && user) {
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
