import React from 'react'
import { Link } from 'react-router-dom'

const BackButton = () => {
  return (
    <Link to={"/"} className="py-2 px-3 bg-black text-white rounded-md ">
      Back
    </Link>
  )
}

export default BackButton
