import {useState} from "react";

function Addsub() {
    let [num,setNum]=useState(0);

    function add(){
        num=num+1
        setNum(num)
        checking();
    }

    function sub(){
        num=num-1
        setNum(num)
    }

    function cle(){
        setNum(0)
    }

    let [check,setCheck]=useState(false)
    function checking(){
        if(num===0){
            check= true;
            setCheck(check);
        }
        else{
            check=false;
            setCheck(check);
        }
        return check;

    }
    return(
        <>
        <button type="submit" onClick={add}>Add</button>
        <button type="submit" onClick={sub} disabled={check}>Sub</button>
        <button type="submit" onClick={cle}>Clear</button>
        <p>{num}</p>
        </>
    );
}


export default Addsub;