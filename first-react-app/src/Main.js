import Namber from "./Namber";
import Buttons from "./Buttons";
import {useState} from "react";


function Main() {
    const [counter, setCounter] = useState(0)
    return(
        <div className="main__centr" >
            <Namber counter={counter}/>
            <Buttons counter={counter} setCounter={setCounter}/>
        </div>
    )
}

export default Main;