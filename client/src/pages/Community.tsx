import React from 'react'
import OurStories from '../components/HomePage/OurStories'
import Navbar from '../components/Navbar'

type Props = {}

function Community({}: Props) {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center">
        <Navbar/>
        <OurStories/>
    </div>
  )
}

export default Community