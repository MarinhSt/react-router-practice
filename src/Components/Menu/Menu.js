import { NavLink } from 'react-router-dom'

function Menu() {
    return (
        <>
            <h2>Menu</h2>
            <ul>
                {routes.map(route => (
                    <li key={route.to}>
                        <NavLink
                            style={({ isActive }) => styles(isActive)}
                            to={route.to}
                        >
                            {route.text}
                        </NavLink>
                    </li>
                ))}
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
})
routes.push({
    to: '/Blog',
    text: 'Blog',
})
routes.push({
    to: '/Profile',
    text: 'Profile',
})

export { Menu }
