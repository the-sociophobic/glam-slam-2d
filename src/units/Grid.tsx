import React from 'react'

import { MAX_FRAME, X_DIMENSION, Y_DIMENSION } from '../utils/consts'
import { Context } from '../components/Store'
import Object from './Object'
import useAnimationFrame from '../hooks/useAnimationFrame'
import useSize from '../hooks/useSize'


export type OBJECT_TYPE = '_' | 'B' | 'X'
const object_positions: OBJECT_TYPE[] = [
  '_', '_', '_', '_', 'B', '_', '_', '_', '_', '_', '_', '_', '_', 'X', 'X', '_', '_', '_', 'B', '_', '_', '_', '_', '_', 'B', '_', '_', '_', '_', '_', '_', '_', '_', 'X', 'X', '_', '_', '_', 'B', '_', '_', '_', '_', '_', 'B', '_', '_', '_', '_', '_', '_', '_', '_', 'X', 'X', '_', '_', '_', 'B', '_',
  '_', '_', 'X', '_', '_', '_', 'X', '_', 'B', 'B', 'B', 'X', '_', '_', '_', 'X', '_', '_', '_', '_', '_', '_', 'X', '_', '_', '_', 'X', '_', 'B', 'B', 'B', 'X', '_', '_', '_', 'X', '_', '_', '_', '_', '_', '_', 'X', '_', '_', '_', 'X', '_', 'B', 'B', 'B', 'X', '_', '_', '_', 'X', '_', '_', '_', '_',
  '_', '_', '_', '_', '_', 'B', '_', '_', '_', 'X', '_', '_', '_', '_', '_', '_', 'B', '_', 'X', '_', '_', '_', '_', '_', '_', 'B', '_', '_', '_', 'X', '_', '_', '_', '_', '_', '_', 'B', '_', 'X', '_', '_', '_', '_', '_', '_', 'B', '_', '_', '_', 'X', '_', '_', '_', '_', '_', '_', 'B', '_', 'X', '_',
]


const Grid: React.FC = () => {
  // const { frame } = React.useContext(Context)
  const frame = useAnimationFrame()
  const ref = React.useRef<HTMLDivElement>(null)
  const size = useSize(ref)
  const isVertical = true//!size || size.width / size.height > 1

  return (
    <div className='Grid' ref={ref}>
      {/* {Array.from({ length: X_DIMENSION * Y_DIMENSION }).map((cell, index) => {
        const y = Math.floor(index / MAX_FRAME)
        const x = index - y * MAX_FRAME

        const obj = object_positions[y * MAX_FRAME + ((x + frame) % MAX_FRAME)]

        if (obj === '_')
          return ''

        return <Object
          key={x + ' ' + y}
          x={x}
          y={y}
          type={obj}
        />
      })} */}
      {object_positions.map((obj: OBJECT_TYPE, index: number) => {
        if (obj === '_')
          return ''

        const y = index < MAX_FRAME ? 0 : index < MAX_FRAME * 2 ? 1 : 2
        const x = index - y * MAX_FRAME - frame

        return <Object
          key={index}
          x={isVertical ? x : y}
          y={isVertical ? y : x}
          type={obj}
        />
      })}
    </div>
  )
}


export default Grid