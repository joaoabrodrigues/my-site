import React from 'react'
import PropTypes from 'prop-types'
import pic03 from '../images/pic03.png'

const Header = (props) => (
    <div>
     {/* <header id="header" style={props.timeout ? {display: 'none'} : {}}> */}
        {/* <div className="logo">
            <span className="icon fa-code"></span>
        </div> */}
        <div>
            <span className="image main"><img src={pic03} alt="yeah, that's me!"/></span>
            <span className="center">
                <h3>João Antônio Bezerra Rodrigues</h3>
                <h5>Backend Developer</h5>
                <h6>Maringa, Brazil</h6>
            </span>
        </div>
        <header id="header" style={props.timeout ? {display: 'none'} : {}}>
            <div className="content">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="http://www.linkedin.com/in/joaoabrodrigues" target="_blank" rel="noopener noreferrer" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li><a href="http://www.github.com/joaoabrodrigues" target="_blank" rel="noopener noreferrer" className="icon fa-github"><span className="label">GitHub</span></a></li>
                    </ul>
                </div>
            </div>
        </header>
    </div>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
