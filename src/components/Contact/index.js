import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import emailjs from '@emailjs/browser'
import Loader from 'react-loaders'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()
    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    }, [])
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_g7iaeyd', 'template_i35ucnm', form.current, 'wh2OsHHNyGHATCOtH')
        .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      };

    return (
        <>
        <div className='container contact-page'>
        <div className='text-zone'>
                <h1 className='page-title'>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>
                    I am interested in freelance opportunities - especially on ambitious
                    or large projects. However, if you have any other requests or
                    questions, don't hesitate to contact me using below form either.
                </p>
                <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
                </ul>
                </form>
                </div>
        <h2>Links</h2>
        <ul className='links'>
        <li className='link-list'>
          <a
            href="https://www.facebook.com/cleochan.torres/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              color="#fff"
              className="anchor-icon"
            />
          </a>
        </li>
        <li className='link-list'>
          <a
            href="https://www.instagram.com/_chanbucket/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              color="#fff"
              className="anchor-icon"
            />
          </a>
        </li>
        <li className='link-list'>
          <a
            href="https://twitter.com/Chrstiantrrs"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              color="#fff"
              className="anchor-icon"
            />
          </a>
        </li>
        <li className='link-list'>
          <a
            href="https://github.com/sirknight001"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#fff"
              className="anchor-icon"
            />
          </a>
        </li>
        <li className='link-list'>
          <a
            href="https://www.linkedin.com/in/christian-torres-243759159/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#fff"
              className="anchor-icon"
            />
          </a>
        </li>
        </ul>
        </div>
        </div>
        <Loader type='semi-circle-spin' />
        </>
    )
}

export default Contact