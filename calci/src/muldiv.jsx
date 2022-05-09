import {useState} from "react";

function Muldiv() {
    const [num,setNum]=useState(0);
    function sta(e) {
       const val=e.target.value
        localStorage.setItem("a",val)
    }
    
    function stb(e) {
        const val=e.target.value
        localStorage.setItem("b",val)
    }

    function mul() {
        const a=localStorage.getItem("a")
        const b=localStorage.getItem("b")
        setNum(a*b)
    }

    function div() {
        const a=localStorage.getItem("a")
        const b=localStorage.getItem("b")
        setNum(a/b)
    }

    return(
        <>
        <input type="number" name="a" onChange={sta}></input>
        <br />
        <br />
        <input type="number" name="b" onChange={stb}></input>
        <br />
        <br />
        <button type="submit" onClick={mul}>MUL</button>
        &nbsp;&nbsp;    
        <button type="submit" onClick={div}>DIV</button>
        <p>{num}</p>        </>
    );
}

export default Muldiv;

