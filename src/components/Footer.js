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
                            
                            <button type="submit" className='fa fa-facebook'></button>
                            <button type="submit" className='fa fa-instagram'></button>
                            <button type="submit" className='fa fa-twitter'></button>
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

