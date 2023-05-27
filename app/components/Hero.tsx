import Link from 'next/link'
import React from 'react'
import trainerPic from '../../public/clem-onojeghuo-n6gnCa77Urc-unsplash.png'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b lg:bg-gradient-to-r from-primary via-primary to-secondary text-tertiary">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center pt-24 lg:pt-0">
          <div className="flex flex-col justify-center mb-10 lg:mb-0">
            <h1 className="text-4xl lg:text-7xl font-bold">
              Find the nearest fitness trainers around you
            </h1>
            <p className="font-light mt-5 mb-10 lg:mt-10 lg:mb-16">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
              itaque, vel voluptate error sint nam laboriosam molestias nostrum
              dolores beatae velit nemo, quod vero explicabo. Sit vero tempora a
              officia?
            </p>
            <div className="">
              <Link
                href={'/'}
                className="bg-secondary py-4 px-5 rounded-3xl text-black font-bold shadow-md hover:shadow-2xl"
              >
                Subscribe Today
              </Link>
            </div>
          </div>
          <div className="">
            <Image alt="H" src={trainerPic} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
