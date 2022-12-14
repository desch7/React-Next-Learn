import React from "react";
import SingleTodo from "./SingleTodo";

const ToDo = ({ toDo, markDone, setUpdateData, deleteTask }) => {
	return (
		<>
			{toDo &&
				toDo
					.sort((a, b) => (a.id > b.id ? 1 : -1))
					.map((task, index) => {
						
							if (!task.accept) {
								return <SingleTodo key={task.id} task={task} markDone={markDone} setUpdateData={setUpdateData} deleteTask={deleteTask} />
							}
						
					})}
		</>
	);
};

export default ToDo;
