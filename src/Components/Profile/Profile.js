// import { useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/auth'

function Profile() {
    // const navigate = useNavigate()
    const { user } = useAuth()
    // if (!user) {
    //     navigate('/')
    // }
    return (
        <>
            <h1>Profile</h1>
            <p>Welcome, {user.userName} to your profile</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                facilis sunt fuga porro eum ad esse temporibus dolor? Neque
                corporis incidunt, perferendis numquam sequi eveniet sed aut
                rem. Harum, enim?
            </p>
        </>
    )
}

export { Profile }
