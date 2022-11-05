import { BlogPreview } from './BlogPreview'

function Blog() {
    const created = 'official'
    return (
        <>
            <h1>{created} Blog</h1>
            <p>
                Welcome to our blog. here you can find some posts form your
                interest
            </p>
            {/* <ul>
                {blogData.map(post => (
                    <BlogCard post={post} key={post.slug} />
                ))}
            </ul> */}
            <BlogPreview created={created} />
        </>
    )
}

export { Blog }
