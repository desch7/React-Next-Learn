import Done from "../Components/Done";
import {UserContext} from '../UserContext'
import { useContext } from "react";

function DonePage(){
    const {toDo, setToDo} = useContext(UserContext);

    return (<div>
        <Done list={{toDo, setToDo}}/>
    </div>);
}

export default DonePage;