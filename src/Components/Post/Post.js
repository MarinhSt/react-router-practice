import { NavLink, useParams } from 'react-router-dom'
import { blogData } from '../BlogData/BlogData'

function Post() {
    const { slug } = useParams()
    const info = blogData.find(post => post.slug === slug)
    const { tittle, text, author } = info

    return (
        <>
            <h2>{tittle}</h2>
            <p>{text}</p>
            <p>{author}</p>
            <NavLink to="/Blog">Go Back</NavLink>
        </>
    )
}

export { Post }
