export function PopUp({ goBack, setOpenModal }) {
    return (
        <div
            id="modal"
            style={{
                position: 'absolute',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                width: '100%',
                height: '100%',
                backgroundColor: '#2b2f3090',
                // backgroundColor: 'red',
                top: '0',
                left: '0',
            }}
        >
            <div
                style={{
                    padding: '20px 80px',
                    color: 'black',
                    backgroundColor: 'white',
                    boxShadow: '0px 0px 8px 1px  #2b2f3090',
                    borderRadius: '40px',
                }}
            >
                <h4>Are you sure to cancel?</h4>
                <p>the changes will be lose</p>
                <button
                    style={{
                        margin: '5px',
                    }}
                    onClick={() => goBack()}
                >
                    Yes
                </button>
                <button
                    style={{
                        margin: '5px',
                    }}
                    onClick={() => setOpenModal(false)}
                >
                    No
                </button>
            </div>
        </div>
    )
}
