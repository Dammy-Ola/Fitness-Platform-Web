'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { BsCartDash } from 'react-icons/bs'

const Navbar = () => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }
  return (
    <nav className="absolute top-0 left-0 right-0 text-tertiary">
      <div className="container">
        {/* Mobile Nav */}
        <div className="flex justify-between items-center flex-wrap lg:hidden py-5 font-light">
          <div className="font-extrabold">FitNezz</div>

          <div className="flex items-center justify-between lg:hidden">
            <BsCartDash className="text-2xl mr-1" />
            <button
              className="inline-flex p-3 rounded-full text-black bg-tertiary hover:bg-secondary ml-1"
              onClick={handleClick}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div
            className={`${
              active ? '' : 'hidden'
            } w-full bg-tertiary text-primary p-3 my-3 text-center`}
          >
            <Link href={'/'} className="block my-4">
              Home
            </Link>
            <Link
              href={'/'}
              className="block my-4 border border-primary py-1 px-3 rounded-3xl font-semibold"
            >
              Log In
            </Link>
            <Link
              href={'/'}
              className="block my-4 bg-secondary py-1 px-3 rounded-3xl text-black font-semibold"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex justify-between items-center py-5 font-light">
          <div className="font-extrabold">FitNezz</div>

          <div className="">Home</div>
          <div className="flex justify-between items-center">
            <BsCartDash className="text-2xl" />
            <Link
              href={'/'}
              className="border border-tertiary py-1 px-3 rounded-3xl font-semibold mx-3 shadow-2xl"
            >
              Log In
            </Link>
            <Link
              href={'/'}
              className="bg-secondary py-1 px-3 rounded-3xl text-black font-semibold shadow-2xl"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
