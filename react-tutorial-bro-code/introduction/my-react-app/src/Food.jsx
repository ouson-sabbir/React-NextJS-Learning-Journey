import React from 'react'

const Food = () => {
    const foodOne = "Orange";
    const foodTwo = "Apple";
    const foodThree = "Banana";
  return (
   
    <div className='food-section'>
      <ul>
        <li>{foodOne}</li>
        <li>{foodTwo.toUpperCase()}</li>
        <li>{foodThree.toLowerCase()}</li>
      </ul>
    </div>
  )
}

export default Food
