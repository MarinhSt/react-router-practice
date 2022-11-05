import { NavLink } from 'react-router-dom'

function BlogCard({ post }) {
    return (
        <li>
            <NavLink to={post.slug}>{post.tittle}</NavLink>
            <p>{post.author}</p>
        </li>
    )
}

export { BlogCard }
