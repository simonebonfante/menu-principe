import React from 'react';
import Backgroundimage from '../../assets/images/background/image-4.jpg';
import { Link } from 'react-router-dom'
import logonew from '../../assets/images/logo.png'

function Main() {
    return (
        <>
            <footer className="main-footer">
                <div className="image-layer" style={{ backgroundImage: `url(${Backgroundimage})` }}> </div>
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="copyright">&copy; 2024 Il Principe. All Rights Reserved   |    Created by <Link to="https://www.linkedin.com/in/simone-bonfante-837363147/" target="blank">Simone Bonfante</Link></div>
                    </div>
                </div>

            </footer>
            <div className="scroll-to-top scroll-to-target" data-target="html"><span className="icon fa fa-angle-up"></span></div>
        </>
    )
}

export default Main