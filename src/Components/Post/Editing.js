import { useState } from 'react'
import { useAuth } from '../auth/auth'
import { PopUp } from './PopUp'

export function Editing() {
    const { actualPost, saveChanges, goBack } = useAuth()

    const [changes, setChanges] = useState(actualPost)
    const { tittle, text, author } = changes
    const [modify, setModify] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    const onSave = e => {
        saveChanges(changes)
        e.preventDefault()
    }

    //para poder realizar validacion si hay cambio, redirigir de una o preguntar si quiere cancelar y perder los cambios
    const onCancel = () => {
        console.log({ modify })
        !!modify ? setOpenModal(true) : goBack()
        // :(console.log('go back'),
        // )
    }

    return (
        <>
            <h3 style={{ color: 'red' }}>Editing this post</h3>

            <form onSubmit={onSave}>
                <label>Tittle</label>
                <input
                    value={tittle}
                    onChange={({ target }) => {
                        setChanges({ ...changes, tittle: target.value })
                        setModify(true)
                    }}
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
                    onChange={({ target }) => {
                        setChanges({ ...changes, text: target.value })
                        setModify(true)
                    }}
                />
                <br />
                <label>Author</label>
                <input
                    value={author}
                    onChange={({ target }) => {
                        setChanges({ ...changes, author: target.value })
                        setModify(true)
                    }}
                />
                <button type="submit">submit</button>
                <button type={'button'} onClick={onCancel}>
                    cancel
                </button>
                {!!openModal && (
                    //toca crear el popup - esto es un componetne normal
                    <PopUp setOpenModal={setOpenModal} goBack={goBack} />
                )}
            </form>
        </>
    )
}
