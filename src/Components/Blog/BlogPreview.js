import { Outlet } from 'react-router-dom'
import { blogData } from '../Data/BlogData'
import { BlogCard } from './BlogCard'

function BlogPreview({ created }) {
    return (
        <>
            <h3>other post created by {created}</h3>
            <ul>
                <Outlet />
                {blogData.map(post => (
                    <BlogCard post={post} key={post.slug} />
                ))}
            </ul>
        </>
    )
}

export { BlogPreview }
