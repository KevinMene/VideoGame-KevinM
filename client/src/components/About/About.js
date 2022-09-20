import React, { Fragment } from 'react';
import Nabvar from '../Navbar/navbar';
import './about.css';
import Footer from '../Footer/footer';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsYoutube, BsLinkedin } from 'react-icons/bs';

function About() {
  return (
    <Fragment>
      <Nabvar />
      <Footer />
      <div className='container-abou'>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">Kevin Meneces</h1>
            <h2 className="card-subtitle mb-2 text-muted">Proyecto API Video Games</h2>
            <div className='redes-card'>
              <h2>Redes</h2>
              <ul>
                <li>
                  <a className="link link-git" href="https://github.com/Buitra" target="_blank" title="Git" rel="noreferrer">
                    <BsGithub /></a>
                </li>
                <li>
                  <a className="link link-face" href="https://www.facebook.com/kevin.buitragomeneces/about" target="_blank"
                    title="Facebook" rel='noreferrer'>
                    <BsFacebook />
                  </a>
                </li>
                <li>
                  <a className='link link-inst' href="https://www.instagram.com/buitra07/" title='Instagram' target='_blank' rel='noreferrer'>
                    <BsInstagram />
                  </a>
                </li>
                <li>
                  <a className='link link-twi' href="https://twitter.com/Kevinbuitra07" title='Twitter' target='_blank' rel='noreferrer'>
                    <BsTwitter />
                  </a>
                </li>
                <li>
                  <a className='link link-you' href="https://www.youtube.com/channel/UCmk6YZr2BctibpcM3Y6e7vQ/featured" title='Youtube' target='_blank' rel='noreferrer'>
                    <BsYoutube />
                  </a>
                </li>
                <li>
                  <a className='link link-lin' href="https://www.linkedin.com/in/kevin-buitrago-meneces-21770b166/" title='Linkedin' target='_blank' rel='noreferrer'>
                    <BsLinkedin/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default About;