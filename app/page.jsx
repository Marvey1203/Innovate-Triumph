"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {

  return (
    <section className="w-full h-[100%] flex justify-center items-center">
      <Image
        priority
        layout='fill'
        className="z-[-2]"
        src={"/HeroImage.webp"}
        alt='Creative hero background of full of vibrant colors '
      />
      <div className="grid grid-cols-2 z-[2] text-white py-20">
        <div clasName="flex flex-col gap-5">
          <motion.h1 initial={{x:-100, opacity:0}}
              animate={{x:0, opacity:100}} transition={{ duration:'0.3'}} whileHover={{scale:'1.02'}} className="text-5xl">
            A Digital Development <span  className="text-[150px] font-bold uppercase">Studio.</span> 
          </motion.h1>
          <motion.p className='text-[20px]' initial={{x:-100, opacity:0}}
              animate={{x:0, opacity:100}} transition={{ duration:'2'}}>
            Welcome to our web design agency, where we turn your digital dreams into reality. We're a team of creative individuals who are passionate about what we do.
          </motion.p>
        </div>
        <div clasName="">

        </div>
      </div>
    </section>
  )
}
