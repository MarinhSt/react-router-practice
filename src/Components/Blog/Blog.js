import { PostsPreview } from './PostsPreview'

function Blog() {
    const created = 'Official team'
    return (
        <>
            <h1>{created} blog</h1>
            <p>
                Welcome to our blog. here you can find some posts form your
                interest
            </p>
            <PostsPreview created={created} />
        </>
    )
}

export { Blog }
