import { useState } from "react";
import AddTaskForm from "./AddTaskForm.js";
import UpdateForm from "./UpdateForm.js";
import ToDo from "./ToDo.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Display(props) {

	const [newTask, setNewTask] = useState("");
	const [updateData, setUpdateData] = useState("");

	const addTask = () => {
		if (newTask) {
			let num = props.list.toDo.length + 1;
			let newEntry = { id: num, title: newTask, status: false, timeidA: 0, accept: false };
			props.list.setToDo([...props.list.toDo, newEntry]);
			console.log('toDo=>' + props.list.toDo);
			setNewTask("");
		}
	};

	const deleteTask = (id) => {
		//setTodoDoneList(todoDoneList.filter((task) => task.id !== id));
		let newTasks = props.list.toDo.filter((task) => task.id !== id);
		props.list.setToDo(newTasks);
	};

	let timeid;

	const markDone = (id) => {
		let currTask;
		let newTask1;

		let newTask = props.list.toDo.map((task) => {
			if (task.id === id) {

				console.log('id first ==>' + task.id);
				currTask = { ...task, status: !task.status, accept: !task.accept };
				console.log('currTask.accepted ==>' + task.id);
				return { ...task, status: !task.status, accept: !task.accept };
			}
			return task;
		});


		if (!currTask.status) {
			clearTimeout(currTask.timeidA);
			newTask1 = props.list.toDo.map((task) => {
				if (task.id === id) {
					console.log('newTask ID==>' + task.id);
					//currTask = { ...task, status: !task.status};
					return { ...task, status: !task.status, timeidA: 0, accept: false };
				}
				return task;
			});
			props.list.setToDo(newTask1);
		} else {
			timeid = setTimeout(() => {
				props.list.setToDo(newTask);
			}, 10000);//30000
			newTask1 = props.list.toDo.map((task) => {
				if (task.id === id) {
					//currTask = { ...task, status: !task.status};
					console.log('currTask==>' + currTask.status);
					return { ...task, status: !task.status, timeidA: timeid };
				}
				return task;
			});
			props.list.setToDo(newTask1);
		}

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
		let filterRecords = [...props.list.toDo].filter((task) => task.id !== updateData.id);
		let updatedObject = [...filterRecords, updateData];
		props.list.setToDo(updatedObject);
		setUpdateData("");
	};
	return (
		<div className="container App">
			<div className="navBar">
				<Link to='/' className="navItem">Home</Link>
				<Link to='/done/' className="navItem">Done Task</Link>
			</div>
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
			{props.list.toDo && props.list.toDo.length ? "" : "No Tasks Available"}
			<ToDo
				toDo={props.list.toDo}
				markDone={markDone}
				setUpdateData={setUpdateData}
				deleteTask={deleteTask}
			/>
		</div>
	);
}
export default Display;
