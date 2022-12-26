import React from 'react'

import { Context } from '../../components/Store'
import useKeyPress from '../../hooks/useKeyPress'
import clamp from '../../utils/clamp'

import girlImg from './sprites/Girl.png'
import { Y_DIMENSION } from '../../utils/consts'
import getStylePos from '../../utils/getStylePos'


const Char: React.FC = () => {
  const { charPosY, setState } = React.useContext(Context)
  const downPressed = useKeyPress('ArrowDown')
  const upPressed = useKeyPress('ArrowUp')

  React.useEffect(() => {
    if (downPressed && !upPressed)
      setState({ charPosY: clamp(charPosY + 1, 0, Y_DIMENSION - 1)})
    if (!downPressed && upPressed)
      setState({ charPosY: clamp(charPosY - 1, 0, Y_DIMENSION - 1)})
  }, [downPressed, upPressed])

  return (
    <div className='Char'>
      <img
        src={girlImg}
        className='Char__img'
        style={getStylePos(0, charPosY)}
      />
    </div>
  )
}


export default Char