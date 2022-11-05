import { NavLink } from 'react-router-dom'

function BlogCard({ post }) {
    return (
        <li>
            <NavLink
                style={({ isActive }) => ({
                    display: isActive ? 'none' : 'block',
                })}
                to={post.slug}
            >
                {post.tittle}
            </NavLink>
            <p>{post.author}</p>
        </li>
    )
}

export { BlogCard }
