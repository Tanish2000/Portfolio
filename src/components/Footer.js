import React from 'react';
import FooterImg from '../img/footer.jpg';

function Footer() {
    const styles = {
        width : '800px',
        height : '146px',
    }
    return (
        <div>
            <img src={FooterImg} style={{width : '800px' , height : '146px'}}></img>
        </div>
    )
}

export default Footer;
