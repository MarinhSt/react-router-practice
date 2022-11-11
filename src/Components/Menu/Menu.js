import { NavLink } from 'react-router-dom'
import { useAuth } from '../auth/auth'

function Menu() {
    const { user } = useAuth()
    return (
        <>
            <h2>Menu</h2>
            <ul>
                {routes.map(route => {
                    if (route.private && !user) return null
                    else if (route.to === '/Login' && user) return null

                    return (
                        <li key={route.to}>
                            <NavLink
                                style={({ isActive }) => styles(isActive)}
                                to={route.to}
                            >
                                {route.text}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
const styles = active => {
    if (active) {
        return { color: 'white', backgroundColor: 'green' }
    } else {
        return { color: 'blue' }
    }
}
const routes = []
routes.push({
    to: '/',
    text: 'Home',
    private: false,
})
routes.push({
    to: '/Blog',
    text: 'Blog',
    private: false,
})
routes.push({
    to: '/Profile',
    text: 'Profile',
    private: true,
})
routes.push({
    to: '/Login',
    text: 'Login',
    private: false,
})
routes.push({
    to: '/Logout',
    text: 'Logout',
    private: true,
})

export { Menu }
