import React from 'react'

const Prop = ({heading,matter}) => {
  return (
    <div className='prop'>
      <h2>{heading}</h2>
      <p>{matter}</p>
    </div>
  )
}

export default Prop