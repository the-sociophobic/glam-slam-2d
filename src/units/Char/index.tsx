import React from 'react'

import { useSwipeable } from 'react-swipeable'
import { isMobile } from 'react-device-detect'

import { Context } from '../../components/Store'
import useKeyPress from '../../hooks/useKeyPress'
import clamp from '../../utils/clamp'
import { Y_DIMENSION } from '../../utils/consts'
import getStylePos from '../../utils/getStylePos'
import useSize from '../../hooks/useSize'

import girlImg from './sprites/Girl.png'


const Char: React.FC = () => {
  const { charPosY, setState } = React.useContext(Context)
  
  const downPressed = useKeyPress('ArrowDown')
  const upPressed = useKeyPress('ArrowUp')
  const leftPressed = useKeyPress('ArrowLeft')
  const rightPressed = useKeyPress('ArrowRight')
  const swipeHandlers = useSwipeable({
    onSwipedUp: e => isMobile && isVertical && setState({ charPosY: clamp(charPosY - 1, 0, Y_DIMENSION - 1)}),
    onSwipedDown: e => isMobile && isVertical && setState({ charPosY: clamp(charPosY + 1, 0, Y_DIMENSION - 1)}),
    onSwipedLeft: e => isMobile && !isVertical && setState({ charPosY: clamp(charPosY - 1, 0, Y_DIMENSION - 1)}),
    onSwipedRight: e => isMobile && !isVertical && setState({ charPosY: clamp(charPosY + 1, 0, Y_DIMENSION - 1)}),
  })
  // const size = useSize(swipeHandlers.ref)
  const isVertical = true//!size || size.width / size.height > 1


  React.useEffect(() => {
    if (!isMobile)
      if (isVertical) {
        if (downPressed && !upPressed)
          setState({ charPosY: clamp(charPosY + 1, 0, Y_DIMENSION - 1)})
        if (!downPressed && upPressed)
          setState({ charPosY: clamp(charPosY - 1, 0, Y_DIMENSION - 1)})
      } else {
        if (rightPressed && !leftPressed)
          setState({ charPosY: clamp(charPosY + 1, 0, Y_DIMENSION - 1)})
        if (!rightPressed && leftPressed)
          setState({ charPosY: clamp(charPosY - 1, 0, Y_DIMENSION - 1)})
      }
  }, [downPressed, upPressed])

  return (
    <div className='Char' {...swipeHandlers}>
      <img
        src={girlImg}
        className='Char__img'
        style={getStylePos(isVertical ? 0 : charPosY, isVertical ? charPosY : 0)}
      />
    </div>
  )
}


export default Char