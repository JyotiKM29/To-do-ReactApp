import React from 'react'

const Task = ({Title ,Description ,deleteTask, index}) => {
  return (
    <div style={{background:'lightgreen'}}>
      <h2>{Title}</h2>
      <h4>{Description}</h4>
      <button onClick={()=>{deleteTask(index);}}>Del</button>
    </div>
  )
}

export default Task
