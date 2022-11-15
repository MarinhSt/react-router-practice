import { useState } from 'react'
import { useAuth } from '../auth/auth'

export function Editing() {
    const { actualPost, saveChanges, goBack } = useAuth()

    const [changes, setChanges] = useState(actualPost)
    const { tittle, text, author } = changes

    const onSave = e => {
        saveChanges(changes)
        e.preventDefault()
    }

    //para poder realizar validacion si hay cambio, redirigir de una o preguntar si quiere cancelar y perder los cambios
    const onCancel = () => goBack()

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
                <textarea
                    style={{
                        width: '400px',
                        height: '200px',
                        padding: '10px',
                        resize: 'none',
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
                <button onClick={onCancel}>cancel</button>
            </form>
        </>
    )
}
