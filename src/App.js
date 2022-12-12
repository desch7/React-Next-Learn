import { useState } from "react";
import AddTaskForm from "./Components/AddTaskForm.jsx";
import UpdateForm from "./Components/UpdateForm.jsx";
import ToDo from "./Components/ToDo.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
	
	const [toDo, setToDo] = useState([]);
	
	const [newTask, setNewTask] = useState("");
	const [updateData, setUpdateData] = useState("");
	
	const addTask = () => {
		if (newTask) {
			let num = toDo.length + 1;
			let newEntry = { id: num, title: newTask, status: false };
			setToDo([...toDo, newEntry]);
			setNewTask("");
		}
	};
	
	const deleteTask = (id) => {
		let newTasks = toDo.filter((task) => task.id !== id);
		setToDo(newTasks);
	};
	
	const markDone = (id) => {
		let newTask = toDo.map((task) => {
			if (task.id === id) {
				return { ...task, status: !task.status };
			}
			return task; 
		});
		setToDo(newTask);
	};
	const cancelUpdate = () => {
		setUpdateData("");
	};
	const changeTask = (e) => {
		let newEntry = {
			id: updateData.id,
			title: e.target.value,
			status: updateData.status ? true : false,
		};
		setUpdateData(newEntry);
	};
	
	const updateTask = () => {
		let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
		let updatedObject = [...filterRecords, updateData];
		setToDo(updatedObject);
		setUpdateData("");
	};
	return (
		<div className="container App">
			<br />
			<br />
			<h2>Todo List </h2>
			<br />
			<br />
			{updateData && updateData ? (
				<UpdateForm
					updateData={updateData}
					changeTask={changeTask}
					updateTask={updateTask}
					cancelUpdate={cancelUpdate}
				/>
			) : (
        <div className="add">
				<AddTaskForm
					newTask={newTask}
					setNewTask={setNewTask}
					addTask={addTask}
				/></div>
			)}
			{toDo && toDo.length ? "" : "No Tasks Available"}
			<ToDo
				toDo={toDo}
				markDone={markDone}
				setUpdateData={setUpdateData}
				deleteTask={deleteTask}
			/>
		</div>
	);
}
export default App;
