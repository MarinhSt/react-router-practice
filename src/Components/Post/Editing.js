import { useState } from 'react'
import { useAuth } from '../auth/auth'
// import { blogData } from '../Data/BlogData'

export function Editing() {
    const { actualPost, saveChanges } = useAuth()
    console.log({ props: actualPost })

    const [changes, setChanges] = useState(actualPost)
    const { tittle, text, author } = changes
    // const info = { tittle: '', text: '', author: '' }
    // const info = blogData.find(post => post.slug === slug)
    const onSave = () => {
        saveChanges(changes)
        // console.log('onSave')
        // console.log({ save: changes })
        // blogData.find(
        //     post => post.slug === changes.slug && (post = { ...changes })
        // )
        // console.log({ modify: blogData })

        // return e.preventDefault
    }

    return (
        <>
            <h3 style={{ color: 'red' }}>Editing this post</h3>

            <form onSubmit={onSave}>
                <label>Tittle</label>
                <input
                    value={tittle}
                    onChange={({ target }) =>
                        setChanges({ ...changes, tittle: target.value })
                    }
                />
                <br />
                <label>Text</label>
                <input
                    style={{
                        width: '400px',
                        height: 'fit-content',
                        padding: '10px',
                    }}
                    type={'textarea'}
                    value={text}
                    onChange={({ target }) =>
                        setChanges({ ...changes, text: target.value })
                    }
                />
                <br />
                <label>Author</label>
                <input
                    value={author}
                    onChange={({ target }) =>
                        setChanges({ ...changes, author: target.value })
                    }
                />
                <button type="submit">submit</button>
            </form>
        </>
    )
}
