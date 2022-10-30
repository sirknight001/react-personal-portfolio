import './index.scss'
import logo from '../../logo.svg';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'C', 'h', 'r', 'i', 's', 't', 'i', 'a', 'n', ',']
    const jobArray = ['a', ' ', 'R', 'e', 'a', 'c', 't' ,' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])
    
    return (
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>e</span>
                <span className={`${letterClass} _12`}>l</span>
                <span className={`${letterClass} _12`}>l</span>
                <span className={`${letterClass} _12`}>o</span>
                <span className={`${letterClass} _12`}>,</span>
                <br />
                <span className={`${letterClass} _12`}>I</span>
                <span className={`${letterClass} _12`}>'m</span>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22} />
                </h1>
                <h2>Frontend Developer / Javascript Expert / Game Enthusiast</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <div className='App'>
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            </header>
            </div>
        </div>
        <div className='instruction'>
            <h1 className='nav-bar-instruction'>
                Hover the Sidebar to navigate.
            </h1>
        </div>
        <Loader type='semi-circle-spin' />
        </>
    )
}

export default Home