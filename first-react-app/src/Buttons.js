import buttons from './refresh.png'



function Buttons(props) {
    function namberPlus() {
        props.setCounter(props.counter + 3)
    }
    function namberRestart() {
        props.setCounter(0)
    }
    function namberMinus() {
        
        if (props.counter>0) {
            props.setCounter(props.counter - 3)
        }else props.setCounter(0)
    }
    return(
        <div className="button__main" >
            <button className="plus" onClick={namberPlus}>+</button>
            <button className="restart" onClick={namberRestart} >
                <img src= {buttons}/>
                </button>
            <button className="minus"onClick={namberMinus}>-</button>
        </div>
    )
    
}
 
export default Buttons;