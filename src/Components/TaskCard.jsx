import { useState ,useEffect} from "react";

const TaskCard =() =>{
  const [task, setTask] = useState("");
  const [taskDesc , setTaskDesc] = useState("");
  const [tasks, setTasks] = useState(()=>{
    const saved = localStorage.getItem("tasks");
    //console.log('saved',saved);
    return saved ? JSON.parse(saved) : [];});

    useEffect(() => {
    // save tasks whenever they change
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  
  const addTask = () => {
    if (task.trim() === "") return;
        setTasks([...tasks, task+' '+taskDesc]); // add new task
  
    setTask(""); // clear input
    setTaskDesc("");
  };

   const deleteTask = (task) => {
      setTasks(tasks.filter((t) => t !== task)); // remove by id
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="New task Name"
        className="border px-3 py-2 rounded"
      />
        <input
        type="text"
        value={taskDesc}
        onChange={(e) => setTaskDesc(e.target.value)}
        placeholder="New task Descriprtion"
        className="border px-3 py-2 rounded"
      />
      <button
        onClick={addTask}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add
      </button>

      <ul  className= "task-list">
     
        {tasks.map((t, i) => (
          <li key={i}> {t} 
           
          <button
              onClick={() => deleteTask(t)}
                 className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"         >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskCard;
