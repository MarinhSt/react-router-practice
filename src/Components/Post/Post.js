import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../auth/auth'
// import { blogData } from '../Data/BlogData'

function Post() {
    const { user, postList, edit, setFrom } = useAuth()
    const { slug } = useParams()
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const info = postList.find(post => post.slug === slug)
    const { tittle, text, author } = info
    const goBack = () => navigate('/Blog')
    const goEdit = () => {
        edit({ slug, ...info })
        setFrom(pathname)

        navigate('/Editing')
    }
    return (
        <>
            <h2>{tittle}</h2>
            <p>{text}</p>
            <p>{author}</p>
            <button onClick={goBack}>Go Back button</button>
            <br />
            {user && <button onClick={goEdit}>Edit</button>}
        </>
    )
}

export { Post }
