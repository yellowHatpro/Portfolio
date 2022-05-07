import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
    render() {
        return(
            <footer className="footer">
                <div className="footer-items">
                    <i className='fab fa-brands fa-github'></i>
                    <i className='fab fa-brands fa-instagram'></i>
                    <i className='fab fa-brands fa-linkedin'></i>
                    <i className='fab fa-brands fa-twitter'></i>
                </div>
            </footer>
        )
    }

}
export default Footer;