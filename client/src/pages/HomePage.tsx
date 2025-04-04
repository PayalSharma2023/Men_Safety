import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/HomePage/Hero'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        HomePage
    </div>
  )
}

export default HomePage