import { NavLink } from 'react-router-dom'

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
                    <BlogCard post={post} />
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

const blogData = []
blogData.push({
    slug: 'react',
    tittle: 'What is React.js?',
    text: 'is a free and open-source front-end JavaScript library for building user interfaces based on UI components.',
    author: 'By: My other me',
})
blogData.push({
    slug: 'vue',
    tittle: 'What is Vue.js?',
    text: 'Vue.js is a model-view-view-model (MVVM) JavaScript framework for building user interfaces (UIs) and single-page applications.',
    author: 'By: Me',
})
blogData.push({
    slug: 'react',
    tittle: 'What is Next.js?',
    text: 'is a JavaScript framework that enables you to build superfast and extremely user-friendly static websites, as well as web applications using React.',
    author: 'By: Someone else',
})

export { Blog }
