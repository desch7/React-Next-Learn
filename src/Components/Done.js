import React from "react";
import SingleTodo from "./SingleTodo";
import { Link } from "react-router-dom";
import "../App.css";

function Done(props) {
    //const location = useLocation();
    //console.log('Done==>'+JSON.stringify(location));
    //console.log('State==>'+location.state.length);
    //const [toDo, setToDo] = useState(location.state);
    console.log('toDo==>' + props.list.toDo);
    const markDone = () => { };
    const setUpdateData = () => { };
    const deleteTask = () => { };

    return (
        <>
            <div className="navBar">
                <Link to='/' className="navItem">Home</Link>
            </div>
            {props.list.toDo &&
                props.list.toDo
                    .sort((a, b) => (a.id > b.id ? 1 : -1))
                    .map((task, index) => {
                        if (task.accept) {
                            return <SingleTodo key={task.id} task={task} markDone={markDone} setUpdateData={setUpdateData} deleteTask={deleteTask} />
                        }

                    })}
        </>);
}

export default Done;