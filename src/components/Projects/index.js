import './index.scss'
import React from 'react'
import renderPortfolio from './portfolio'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import portfolioData from '../0-data/portfolio.json'
import Loader from 'react-loaders'

const Project = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    }, [])

    return (
        <>
        <div className='container portfolio-page'>
            <h1 className='page-title'>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
            </h1>
        </div>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
        <Loader type='semi-circle-spin' />
        </>
    )
}

export default Project