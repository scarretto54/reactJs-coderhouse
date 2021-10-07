import React, { useState, useImperativeHandle } from 'react'

const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none'}

  const toggleVisibility = () => {
    setVisible(!visible)
  } 

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

  return (
    <div>
      <div style={hideWhenVisible}>
        <button className='btn btn-success' onClick={toggleVisibility}><strong>{props.buttonLabelShow}</strong></button>        
      </div>
      <div style={showWhenVisible}>
         <button className='btn btn-secondary' onClick={toggleVisibility}><strong>{props.buttonLabelHide ? props.buttonLabelHide : 'Volver'}</strong></button>
         {props.children}
      </div>
      </div>
    ) 
})

export default Togglable
