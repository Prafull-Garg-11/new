import style  from "./demo.module.css"
import Test from "./test.jsx"
import onTest from "./ontest.jsx"
const Demo=()=>{
    return(
        <>
        <h2 className={style.s}>This is the first function demo</h2>
        <Test></Test>
        <button className={style.button} type="submit" onClick={onTest} >Submit</button>
        </>
    );
}
export default Demo;