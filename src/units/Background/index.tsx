import React from 'react'

import { MAX_FRAME, X_DIMENSION } from '../../utils/consts'
import useAnimationFrame from '../../hooks/useAnimationFrame'

import backgroundImg from './sprites/Background.png'
import useSize from '../../hooks/useSize'


const Background: React.FC = () => {
  // const { frame } = React.useContext(Context)
  const frame = useAnimationFrame()
  const containerRef = React.useRef<HTMLDivElement>(null)
  const imgRef = React.useRef<HTMLImageElement>(null)
  const containerSize = useSize(containerRef)
  const imgSize = useSize(imgRef)
  const containerRatio = !containerSize ? 1 : containerSize.width / containerSize.height
  const imgRatio = !imgSize ? 1 : imgSize.width / imgSize.height

  return (
    <div className='Background' ref={containerRef}>
      <img
        ref={imgRef}
        src={backgroundImg}
        className='Background__img'
        style={{
          left: `-${(frame / (MAX_FRAME - 1) - containerRatio / imgRatio) * 100}%`
        }}
      />
    </div>
  )
}


export default Background