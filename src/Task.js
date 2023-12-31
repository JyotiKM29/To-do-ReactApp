import React from "react";
import './App.css'
import { Text } from "@chakra-ui/layout";




const Task = ({ Title, Description, deleteTask, index }) => {
  return (
    <div className="task">
     <div className="task-left">
     <Text fontSize={"4vh"} m={"2"} >{Title}</Text>
     <hr style={{width:"110%"}}/>
     <Text fontSize={"2vh"}  m={"2"}>{Description}</Text>
      
     </div>
      <button className="btn" onClick={() => {
            deleteTask(index)} }>
             Delete
            </button>
           
    </div>
  );
};

export default Task;
