// import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider, PrivateRoute } from './Components/auth/auth'
import { Blog } from './Components/Blog/Blog'
import { BlogPreview } from './Components/Blog/BlogPreview'
import { Footer } from './Components/Footer/Footer'
import { Home } from './Components/Home/Home'
import { Login } from './Components/Login/Login'
import { Logout } from './Components/Logout/Logout'
import { Menu } from './Components/Menu/Menu'
import { NotFound } from './Components/NotFound/NotFound'
import { Post } from './Components/Post/Post'
import { Profile } from './Components/Profile/Profile'

function App() {
    return (
        <>
            <HashRouter>
                <AuthProvider>
                    <Menu />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/Login"
                            element={
                                <PrivateRoute>
                                    <Login hide={true} />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/Logout"
                            element={
                                <PrivateRoute>
                                    <Logout />
                                </PrivateRoute>
                            }
                        />
                        <Route path="/Blog" element={<Blog />} />
                        <Route path="/Blog/:slug" element={<Post />} />
                        <Route path="/preview" element={<BlogPreview />}>
                            <Route path=":slug" element={<Post />} />
                        </Route>
                        <Route
                            path="/Profile"
                            element={
                                <PrivateRoute>
                                    <Profile />
                                </PrivateRoute>
                            }
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </AuthProvider>
            </HashRouter>
        </>
    )
}

export default App
