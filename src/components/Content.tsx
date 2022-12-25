import React from 'react'


export type ContentProps = {
  children: React.ReactNode
}


const Content: React.FC<ContentProps> = ({
  children
}) => {
  return (
    <div className='flex-grow-1 d-flex flex-row position-relative'>
      {children}
    </div>
  )
}


export default Content
