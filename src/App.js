// import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Blog } from './Components/Blog/Blog'
import { BlogPreview } from './Components/Blog/BlogPreview'
import { Footer } from './Components/Footer/Footer'
import { Home } from './Components/Home/Home'
import { Menu } from './Components/Menu/Menu'
import { NotFound } from './Components/NotFound/NotFound'
import { Post } from './Components/Post/Post'
import { Profile } from './Components/Profile/Profile'

function App() {
    return (
        <>
            <HashRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Blog" element={<Blog />} />
                    <Route path="/Blog/:slug" element={<Post />} />
                    <Route path="/preview" element={<BlogPreview />}>
                        <Route path=":slug" element={<Post />} />
                    </Route>
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </HashRouter>
        </>
    )
}

export default App
