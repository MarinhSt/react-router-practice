import { useAuth } from '../auth/auth'
import { PostCard } from './PostCard'

function PostsPreview({ created }) {
    const { postList } = useAuth()
    return (
        <>
            <h3>Others post created by {created}</h3>
            <ul>
                {postList.map(post => (
                    <PostCard post={post} key={post.slug} />
                ))}
            </ul>
        </>
    )
}

export { PostsPreview }
