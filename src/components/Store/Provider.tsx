import React, { useEffect, useState } from 'react'

import { StateType, initialState, NonStateType, OpenPopupProps } from './Types'
import Context from './Context'
import useAnimationFrame from '../../hooks/useAnimationFrame'


type PropsType = {
  children: any
}


const Provider: React.FC<PropsType> = ({ children }) => {
  const [state, _setState] = useState<StateType>(initialState)
  // const frame = useAnimationFrame()

  const setState = (someParams: Partial<StateType>) => {
    _setState({
      ...state,
      ...someParams
    })
  }
  const initializeCallBacks: Function[] = []
  const initialization = async () => {
    if (!state.ready) {
      callInitializeCallbacks()
    }
    setState({ ready: true })
  }

  useEffect(() => {
    initialization()
  }, [])

  // useEffect(() => {
  //   // console.log(state.frame)
  //   setState({ frame: frame })
  // }, [frame])

  const registerInitializeCallback = (fn: Function) => {
    initializeCallBacks.push(fn)
    state.ready && fn()
  }

  const callInitializeCallbacks = () =>
    setTimeout(() => initializeCallBacks.forEach((callback) => callback()), 50)

  const stateAndSetters = () => {
    const nonState: NonStateType = {
      setState,
      registerInitializeCallback,
      openPopup: (props: OpenPopupProps) =>
        setState({
          popup: props
        }),
      closePopup: () =>
        setState({
          popup: undefined
        }),
      updatePopup: (props: OpenPopupProps) =>
        setState({
          popup: props
        })
    }

    return {
      ...(state.ready ? state : initialState),
      ...nonState
    }
  }

  return <Context.Provider value={stateAndSetters()}>{children}</Context.Provider>
}

export default Provider
