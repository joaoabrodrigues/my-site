import React from 'react'
import PropTypes from 'prop-types'

import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>
      
        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="yeah, that's me!" /></span>
          <p>My name is João, I'm around here since 1993.</p>
          <p>I was born in Nova Londrina - state of Paraná - and now I'm living in Maringá.</p>
          <p>I have Bachelor's degree in Information Systems (IT) by UNIPAR - Universidade Paranaense from Paranavaí - state of Paraná -
             Graduate Degree in App Development for Mobile Devices and Graduate Degree in WebMobile Development and Technologies, both by FCV - Faculdade Cidade Verde.</p>
          <p>Also, I'm currently studying Graduate Degree in Object Oriented Development in Java by UNICIV.</p>
          <p>I started my professional carreer right after finish the college, in January 2015. Now, I work as Software Engineer at DB1 Global Software.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>Here, there are some of my skills and what I work with.</p>
          <ul>
            <li>Java <span className="right">&#9733;&#9733;&#9733;&#9733;&#9733;</span></li>
            <li>Stack Spring <span className="right">&#9733;&#9733;&#9733;&#9733;</span></li>
            <li>Git <span className="right">&#9733;&#9733;&#9733;&#9733;</span></li>
            <li>Scrum<span className="right">&#9733;&#9733;&#9733;&#9733;</span></li>
            <li>Eclipse<span className="right">&#9733;&#9733;&#9733;&#9733;</span></li>
            <li>JUnit, Mockito, Powermock<span className="right">&#9733;&#9733;&#9733;</span></li>
            <li>JEE<span className="right">&#9733;&#9733;&#9733;</span></li>
            <li>Hibernate<span className="right">&#9733;&#9733;&#9733;</span></li>
            <li>JSF, JSP, Servlets<span className="right">&#9733;&#9733;&#9733;</span></li>
            <li>SQL<span className="right">&#9733;&#9733;&#9733;</span></li>
            <li>Javascript<span className="right">&#9733;&#9733;&#9733;</span></li>
            <li>HTML<span className="right">&#9733;&#9733;&#9733;</span></li>
            <li>TDD<span className="right">&#9733;&#9733;&#9733;</span></li>
            <li>CSS<span className="right">&#9733;&#9733;</span></li>
            <li>IntelliJ IDEA<span className="right">&#9733;&#9733;</span></li>
            <li>Nodejs<span className="right">&#9733;&#9733;</span></li>
            <li>React, React Native<span className="right">&#9733;&#9733;</span></li>
            <li>Angular 4+<span className="right">&#9733;&#9733;</span></li>
            <li>NoSQL (MongoDB)<span className="right">&#9733;&#9733;</span></li>
          </ul>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <p>Feel free to contact me at <a href="mailto:contato@joaoabrodrigues.com">contato@joaoabrodrigues.com</a> or any social network below.</p>
          <ul className="icons">
            <li><a href="http://www.linkedin.com/in/joaoabrodrigues" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="http://www.github.com/joaoabrodrigues" className="icon fa-github"><span className="label">GitHub</span></a></li>
            <li><a href="http://www.facebook.com/joaoabrodrigues" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="http://www.instagram.com/joaoabrodrigues" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="http://www.twitter.com/joaoabrodrigues" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main