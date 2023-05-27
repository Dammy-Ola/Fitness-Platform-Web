import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import trainerPic from '../../public/clem-onojeghuo-n6gnCa77Urc-unsplash.png'

const TrainerItem = () => {
  return (
    <div className="bg-tertiary hover:shadow-2xl p-3 rounded-lg">
      <Image alt="" src={trainerPic} />
      <div>
        <h3 className="text-center font-bold my-3">Sarah Johnson</h3>
        <div className="flex items-center justify-center my-3">
          <BsStarFill className="text-yellow-400" />
          <BsStarFill className="text-yellow-400" />
          <BsStarFill className="text-yellow-400" />
          <BsStarFill className="text-yellow-400" />
          <BsStarHalf className="text-yellow-400" />
        </div>
      </div>
      <Link
        href={'/'}
        className="bg-secondary py-4 px-5 rounded-3xl text-black font-bold shadow-md hover:shadow-2xl block text-center hover:bg-gradient-to-r from-primary via-primary to-secondary hover:text-tertiary"
      >
        Book
      </Link>
    </div>
  )
}

export default TrainerItem
