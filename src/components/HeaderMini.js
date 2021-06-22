import React from 'react';

const HeaderMini = () => {
    const styles = {
        name: {
            fontFamily: `"Italianno", cursive`,
            fontSize: '60px',
            textShadow: '2px 2px 2px rgb(207, 131, 131)'
        },
        button : {
            borderRadius : '30px',
            padding : '15px 25px',
            fontSize : '14px'
        }
    }
    return (
        <div className="d-xl-none d-block p-4" style={{ background: `radial-gradient(rgb(30, 30, 30), #000)` }}>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <h5 className="text-white text-center" style={styles.name} >Tanish Singh Chouhan</h5>
                <a className="text-decoration-none border border-light text-light" style={styles.button} href="#contact">COFFEE WITH ME</a>
            </div>
        </div>
    )
}

export default HeaderMini
