// import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Blog } from './Components/Blog/Blog'
import { Footer } from './Components/Footer/Footer'
import { Home } from './Components/Home/Home'
import { Menu } from './Components/Menu/Menu'
import { NotFound } from './Components/NotFound/NotFound'
import { Profile } from './Components/Profile/Profile'

function App() {
    return (
        <>
            <HashRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Blog" element={<Blog />} />
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </HashRouter>
        </>
    )
}

export default App
