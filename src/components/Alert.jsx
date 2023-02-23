import React from 'react'

const Alert = (props) => {
  return (
     props.alert &&  <div className="alert-container">
<div class={`alert alert-${props.alert.types} alert-dismissible fade show`} role="alert">
<strong>{props.alert.msg}</strong>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  <div className="alert-time"></div>
</div>
     </div> 
  )
}

export default Alert