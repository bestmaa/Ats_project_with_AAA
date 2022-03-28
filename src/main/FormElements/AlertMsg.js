import React from 'react'

function AlertMsg({Msg,close}) {
  return (
    <div className='fixed top-1/2 left-1/2 bg-inherit p-10 rounded-lg bg-slate-500 text-yellow-100' style={{transform:"translate(-50%,-50%)"}}> 
        <b>{Msg}</b>
        <b  style={{position:"absolute",right:"0px",top:"0px"}} className="p-2 rounded-md cursor-pointer bg-slate-900" onClick={close}>X</b>
    </div>
  )
}

export default AlertMsg