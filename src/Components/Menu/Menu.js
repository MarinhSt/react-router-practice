import { Link } from 'react-router-dom'

function Menu() {
    return (
        <>
            <h2>Menu</h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Blog">Blog</Link>
                </li>
                <li>
                    <Link to="/Profile">Profile</Link>
                </li>
            </ul>
        </>
    )
}

export { Menu }
