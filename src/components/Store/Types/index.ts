import React from 'react'


export type StateType = {
  ready: boolean
  popup?: OpenPopupProps

  charPosY: number
  score: number
  frame: number
}
const initialState: StateType = {
  ready: false,

  charPosY: 0,
  score: 0,
  frame: 0
}

export type OpenPopupProps = {
  text?: string | React.ReactNode
  button?: {
    label?: string | React.ReactNode
    color?: string
    onClick?: () => void
  }
  showLoader?: boolean
}

export type NonStateType = {
  setState: (obj: Partial<StateType>) => void
  registerInitializeCallback: (fn: () => void) => void
  openPopup: (props: OpenPopupProps) => void
  closePopup: () => void
  updatePopup: (props: OpenPopupProps) => void
}
const initialNonState: NonStateType = {
  setState: () => {},
  registerInitializeCallback: () => {},
  openPopup: () => {},
  closePopup: () => {},
  updatePopup: () => {},
}


export {
  initialState,
  initialNonState
}
