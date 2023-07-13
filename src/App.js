import React, { useEffect, useState } from "react";
import Task from "./Task";
import "./App.css";
import { Heading ,Input } from "@chakra-ui/react";



const App = () => {
  //Initaialing with local value
  const initialArray = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState(initialArray);

  //Submit Button
  const handleChange = (e) => {
    e.preventDefault();

    if (title.trim() !== "" && description.trim() !== "") {
      setTasks([...tasks, { title, description }]);
      setTitle("");
      setDescription("");
    }
  };

  //   Saving in Local Storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //   delete task
  const deleteTask = (index) => {
    const filtrArray = tasks.filter((val, i) => {
      return i !== index;
    });

    setTasks(filtrArray);
  };

  return (
    <div className="main">
      <Heading as="h1" size="4xl" p={"1vh"}  alignItems={'center'} >
        Tasks
      </Heading>
      <form onSubmit={handleChange}>
        
        <Input
          variant="flushed"
          placeholder="Task Name"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          w={"100%"}
          p={"2vh"}
          fontSize={"2vh"}
        />
        <Input
          variant="flushed"
          placeholder="Description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          w={"100%"}
          p={"2vh"}
          fontSize={"2vh"}
        />
        {/* <div>
        <label>Task Name:</label>
          <input
            type="text"
            placeholder="heading"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input> */}
        {/* </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
        </div> */}
      
       <button className="btn" type="submit">Add</button>
 
      </form>
      {tasks.map((task, index) => (
        <Task
          key={index}
          Title={task.title}
          Description={task.description}
          index={index}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default App;
