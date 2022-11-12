import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { blogData } from '../Data/BlogData'

function Post() {
    const { slug } = useParams()
    const navigate = useNavigate()
    const info = blogData.find(post => post.slug === slug)
    const { tittle, text, author } = info
    const goBack = () => navigate('/Blog')
    return (
        <>
            <h2>{tittle}</h2>
            <p>{text}</p>
            <p>{author}</p>
            <button onClick={goBack}>Go Back button</button>
            <br />
            <NavLink
                style={({ isActive }) => ({
                    display: isActive ? 'none' : 'block',
                })}
                to="/Preview"
            >
                See other posts
            </NavLink>
        </>
    )
}

export { Post }
