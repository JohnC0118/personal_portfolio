import React from 'react'
import { motion } from 'framer-motion'
import { styles} from '../styles'
import { slideIn, fadeIn } from '../utils/motion'
import { EarthCanvas } from './canvas'
import {contacts} from '../constants'
import { Tilt } from 'react-tilt'


const ContactCard = (contact, index) =>{
  return (
      <Tilt 
        options = {{
          max: 80,
          scale: 1.2,
          speed: 450
        }}
        className = 'sm:h-16 sm:w-16 h-14 w-14 rounded-md cursor-pointer'>
        <div onClick={() => window.open(contact.link, "_blank")}
        className='w-full h-full rounded-md'>
          <img src={contact.icon} alt={contact.name} className='w-full h-full object-fill rounded-md'/>
        </div>
      </Tilt>
  )
}

const Cover = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
        <div className={`${styles.paddingX} max-w-7xl mx-auto relative inset-0 xl:top-1/4 top-[100px] `}>
          <div className='flex xl:flex-row flex-col items-center justify-center'>
          {/* The Introduction Paragraph */}
            <div className='flex gap-10 items-center'>
              <div className='flex flex-col items-center pl-[20px]'>
                <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
                <div className='w-1 h-[400px] violet-gradient'/>
              </div>
              <div className='flex flex-col sm:max-w-lg'>
                <h1 className={`${styles.heroHeadText}`}> Hi, I'm 
                  <br className='block'/> 
                  <span className = "text-[#915eff]"> John Chu</span>
                </h1>
                <p className = {`${styles.heroSubText} mt-2 text-white-100`}>
                A full stack software engineer who designs distributed systems and web application
                </p>
                <div>
                 <div className='mt-10 flex flex-wrap gap-7'>
                 {contacts.map((contact, index) => (<ContactCard key={index} {...contact}/>))}
                  </div>
                </div>
              </div> 
            </div>
          {/* The Earth 3-D Model */}
          <div
              className = "xl:flex-1 xl:h-[550px] h-[350px] " >
            <EarthCanvas/>
          </div>
          </div>
        </div>   
      <div className='absolute xs:bottom-5 bottom-30 w-full flex justify-center items-center'>
        <a href = "#about">
          <div className = "w-[35px] h-[64px] rounded-3xl border-4 border-secondary p-2">
            <motion.div 
            animate={{
              y: [0, 24, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'/>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Cover