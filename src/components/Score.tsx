import React from 'react'

import { Context } from './Store'


const Score: React.FC = () => {
  const { score } = React.useContext(Context)

  return (
    <div className='Score'>
      <div className='container'>
        {score} скидка
      </div>
    </div>
  )
}


export default Score
