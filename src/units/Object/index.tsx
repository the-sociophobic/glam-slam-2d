import React from 'react'

import { Context } from '../../components/Store'
import { BUCKET_POINTS } from '../../utils/consts'
import getStylePos from '../../utils/getStylePos'
import { OBJECT_TYPE } from '../Grid'

import bucketImg from './sprites/Bucket.png'
import obstacleImg from './sprites/Obstacle.png'


export type ObjectProps = {
  x: number,
  y: number,
  type: OBJECT_TYPE
}

const Object: React.FC<ObjectProps> = ({ x, y, type }) => {
  const { score, charPosY, setState } = React.useContext(Context)
  const [taken, setTaken] = React.useState(false)

  React.useEffect(() => {
    if (x === 0 && y === charPosY) {
      switch (type) {
        case 'B':
          setTaken(true)
          setState({ score: score + BUCKET_POINTS })
          return
        case 'X':
          setState({ score: score - BUCKET_POINTS })
          return
        default:
          return
      }
    }
  }, [x])

  let img
  switch(type) {
    case 'B':
      img = bucketImg
      break
    case 'X':
      img = obstacleImg
      break
  }

  return (
    <div className='Object'>
      {taken || type === '_' ? '' :
        <img
          src={img}
          className={`Object__img Object__img--${type}`}
          style={getStylePos(x, y)}
        />
      }
    </div>
  )
}


export default Object