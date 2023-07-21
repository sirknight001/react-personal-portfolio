import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import '../../assets/sirk-picture.jpg'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    }, [])
    return (
        <>
        <div className="container about-page">
        <div className="text-zone">
          <h1 className='page-title'>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            A techie web developer looking for a role in an established IT company especially in
            web development. Currently, a third-year Mechanical Engineering student at the Technological University
            of the Philippines.
          </p>
          <p>
            Confident in coding skills, a curious-cat, constantly learning the newest tech of the modern times. 
          </p>
          <p>
            Gamer. Musician. Old soul. Pixelated stuff. Weeboo. Manga reader. Travel geek. Photography. Cats.
          </p>
        <h2>Certificates</h2>
        <ul className='certificates'>
        <li>
          <a
            href="https://www.freecodecamp.org/certification/sirknight/responsive-web-design"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faFreeCodeCamp}
              color="#fff"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.freecodecamp.org/certification/sirknight/javascript-algorithms-and-data-structures"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faFreeCodeCamp}
              color="#fff"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.freecodecamp.org/certification/sirknight/front-end-development-libraries"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faFreeCodeCamp}
              color="#fff"
              className="anchor-icon"
            />
          </a>
        </li>
        </ul>
        </div>
        </div>
        <div className='image'>
        <img className='img' src={require('../../assets/sirk-picture.jpg')} alt='sirk' />
        </div>
        <Loader type='semi-circle-spin' />
        </>
    )
}

export default About
