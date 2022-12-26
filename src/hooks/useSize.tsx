import React from 'react'

import useResizeObserver from '@react-hook/resize-observer'
import { ResizeObserverEntry } from '@juggle/resize-observer'

const useSize = (target: any) => {
  const [size, setSize] = React.useState<undefined | DOMRectReadOnly>(undefined)

  React.useLayoutEffect(() => {
    setSize(target.current.getBoundingClientRect())
  }, [target])

  useResizeObserver(target, entry => setSize(entry.contentRect))
  return size
}


export default useSize