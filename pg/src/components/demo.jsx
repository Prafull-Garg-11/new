import style  from "./demo.module.css"
import Test from "./test.jsx"
import Button from "./ontest.jsx";
import {useState} from "react";

const Demo=(props)=>{
    console.log(props.name)
    console.log(props.age)
    console.log(props.email)

    let [word,setWord]=useState("hello");
    const setword=(event)=>{
        word="mansi"
        console.log(word)
        setWord(event.target.value)
        console.log(event.target.value)
    }

    
    return(
        <div className={style.dem}>
        <h1 className={style.s}>Hello folk's its me  !!!!</h1>
        <Test/>
        <Button></Button>
        <h1 className={style.props}>{props.name}</h1>
        <h1 className={style.props}>{props.age}</h1>
        <h1 className={style.props}>{props.email}</h1>
        <input type="text"  placeholder="enter text" onChange={setword}/>
        <h1 className="style.check">{word}</h1>
        </div>
    );
}
export default Demo;