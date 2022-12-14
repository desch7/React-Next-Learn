import Display from "../Components/Display";
import React from "react";
import {UserContext} from '../UserContext'
import { useContext } from "react";

function DisplayPage(){
    const {toDo, setToDo} = useContext(UserContext);

    return (<div>
        <Display list={{toDo, setToDo}}/>
    </div>);
}

export default DisplayPage