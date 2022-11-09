import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <div className='wrapper'>
            
            <footer className='footer'>
                <div className='grupo1'>

                    <div className='box'>
                        {/* imagen */}
                    </div>

                    <div className='box'>
                        <h2>Sebastian Silva Canizalez</h2>
                        <p>Estudiante universitario.</p>
                        <p>Cursando octavo semestre de ingenieria de software.</p>
                    </div>

                    <div className='box'>
                        <h2>Sigueme</h2>
                        <div className='red-social'>
                            <a href="https://www.facebook.com/silvanico1/" className='fa fa-facebook' target="_black"></a>
                            <a href="https://www.instagram.com/sebsc0/" className='fa fa-instagram' target="_black"></a>
                            <a href="https://twitter.com/SebSC01" className='fa fa-twitter' target="_black"></a>

                        </div>
                    </div>

                </div>

                <div className='grupo2'>
                    <small>&copy; 2021 <b>SebSC</b> - Todos los derechos Reservados.</small>
                </div>

            </footer>
        </div>
    )
}

export default Footer;
