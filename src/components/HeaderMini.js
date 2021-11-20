import React from 'react';

const HeaderMini = () => {
    const styles = {
        name: {
            fontFamily: `"Italianno", cursive`,
            fontSize: '60px',
            textShadow: '2px 2px 2px rgb(207, 131, 131)'
        },
        button: {
            padding: '15px 20px',
            fontSize: '16px',
            borderRadius: '50px',
            boxShadow: 'rgb(252 42 64) 4px 1px 7px inset',
            zIndex: 9999,
            textAlign: 'center'
        },
        cup: {
            fontSize: '23px',
        }
    }
    return (
        <div className="d-xl-none d-block p-4 my-2" style={{ background: `radial-gradient(rgb(30, 30, 30), #000)` }}>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <h5 className="text-white text-center" style={styles.name} >Tanish Singh Chouhan</h5>
                <button type="button" style={styles.button} className="btn btn-primary px-4 py-1 m-1 bg-transparent">
                    <a href="#contact" className="text-white">
                        <span style={styles.cup}>☕</span> COFFEE WITH ME
                    </a>
                </button>
            </div>
        </div>
    )
}

export default HeaderMini
