import  {React, useState } from 'react';
import style  from "./demo.module.css"
const Button=()=>{
    let [text,setText]=useState("How are you doing today ?");
    const onTest=()=>{
        console.log("THis is just an pop up")
        //text="hello champ!!"
        //console.log(text);
        setText("Everything's Awesome");
    }

    return (
        <div className='hello'>
        <button className={style.button} type="submit" onClick={onTest}>submit</button>
        <h1>{text}</h1>
        </div>
    );
    
}
export default Button;
