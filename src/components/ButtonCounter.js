import React,{useState} from "react"


const ButtonCounter =()=>{
    let [count,setCount] = useState(0);
    function Fun(){
        setCount(count+1)
    }
    return(
       
        <div>
            <p>Button clicked {count} times</p>
            <button onClick={Fun} >Click me</button>
        </div>
    )
}

 

export default ButtonCounter;