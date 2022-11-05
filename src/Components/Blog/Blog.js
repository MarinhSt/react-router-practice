import { NavLink } from 'react-router-dom'
import { blogData } from '../BlogData/BlogData'

function Blog() {
    return (
        <>
            <h1>Blog</h1>
            <p>
                Welcome to our blog. here you can find some posts form your
                interest
            </p>
            <ul>
                {blogData.map(post => (
                    <BlogCard post={post} key={post.slug} />
                ))}
            </ul>
        </>
    )
}

function BlogCard({ post }) {
    return (
        <li>
            <NavLink to={post.slug}>{post.tittle}</NavLink>
            <p>{post.author}</p>
        </li>
    )
}

export { Blog }
