import React from 'react'

import { Context } from '../Store'
import useKeyPress from '../../hooks/useKeyPress'
import clamp from '../../utils/clamp'

import girlImg from './sprites/Girl.png'


const Char: React.FC = () => {
  const { charPosY, setState } = React.useContext(Context)
  const downPressed = useKeyPress('ArrowDown')
  const upPressed = useKeyPress('ArrowUp')

  React.useEffect(() => {
    if (downPressed && !upPressed)
      setState({ charPosY: clamp(charPosY + 1, 0, 2)})
    if (!downPressed && upPressed)
      setState({ charPosY: clamp(charPosY - 1, 0, 2)})
  }, [downPressed, upPressed])

  React.useEffect(() => setState({ charPosY: 2 }), [])
  return (
    <div className='Char'>
      <img
        src={girlImg}
        className={`Char__img Char__img--${charPosY}`}
      />
    </div>
  )
}


export default Char