import React from 'react'

const Help = ({helpText}) => {
  return (
    <p className=' cursor-pointer hover:text-white'><a href='#'>{helpText}</a></p>
  )
}

export default Help