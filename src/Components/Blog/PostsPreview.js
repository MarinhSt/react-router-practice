import { blogData } from '../Data/BlogData'
import { PostCard } from './PostCard'

function PostsPreview({ created }) {
    return (
        <>
            <h3>Others post created by {created}</h3>
            <ul>
                {blogData.map(post => (
                    <PostCard post={post} key={post.slug} />
                ))}
            </ul>
        </>
    )
}

export { PostsPreview }
