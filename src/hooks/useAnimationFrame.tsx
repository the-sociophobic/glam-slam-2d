import React from 'react'
import { MAX_FRAME, MILLISEC_IN_FRAME } from '../utils/consts'


const useAnimationFrame = () => {
  const [start, setStart] = React.useState(0)
  const [frame, setFrame] = React.useState(0)
  const frame_step = (timestamp: number) => {
    if (start === 0)
      setStart(timestamp)
    const elapsed = (timestamp - start)
    let next_frame = elapsed / MILLISEC_IN_FRAME
    if (next_frame > MAX_FRAME) {
      next_frame -= MAX_FRAME
      setStart(start + elapsed)
    }
    if (Math.floor(next_frame) > frame) {
      setFrame(Math.floor(next_frame))
    }
    window.requestAnimationFrame(frame_step)
  }

  React.useEffect(() => {
    window.requestAnimationFrame(frame_step)
  }, [])

  return frame
}


export default useAnimationFrame
