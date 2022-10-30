import './index.scss'
import {
    faAngular,
    faBootstrap,
    faHtml5,
    faJsSquare,
    faReact,
    faSass,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

const Stack = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    }, [])
    return (
        <>
        <div className='container stack-page'>
        <div className="text-zone">
          <h1 className='page-title'>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['T', 'e', 'c', 'h', ' ', 'S', 't', 'a', 'c', 'k']}
              idx={15}
            />
          </h1>
          <p>
            I am React developer, currently learning other JS frameworks like Angular and Vue.
            I am proficient in using React, and quite comfortable with the framework itself.
          </p>
          <p>
            I am also doing game development on the side and currently learning C#.
          </p>
          <p>
            I use TypeScript, SASS, and Bootstrap along with React in developing softwares and websites.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faSass} color="#CC6699" />
            </div>  
            <div className="face3">
              <FontAwesomeIcon icon={faBootstrap} color="#553C7B" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
          </div>
        </div>
        </div>
        <Loader type='semi-circle-spin' />
        </>
    )
}

export default Stack