import style from "./test.module.css";
const Test=(props)=>{
    let color=props.color
    let value=props.code
    console.log(value)
    console.log(color)
    // console.log(props.data);
    return (
        <>
        <h1 key={color} style={{color:value}}>{color}</h1>
        {/* <h1 className={style.a}>Prafull Garg</h1> */}
        {/* <h1>{props.data[0].color}</h1>
        <p>{props.data[0].value}</p>
        <h1>{props.data[1].color}</h1>
        <p>{props.data[1].value}</p>
        <h1>{props.data[2].color}</h1>
        <p>{props.data[2].value}</p>
        <h1>{props.data[3].color}</h1>
        <p>{props.data[3].value}</p>
        <h1>{props.data[4].color}</h1>
        <p>{props.data[4].value}</p>
        <h1>{props.data[5].color}</h1>
        <p>{props.data[5].value}</p>
        <h1>{props.data[6].color}</h1>
        <p>{props.data[6].value}</p>
        */}</> 
    );

}


export default Test;
//props.children check out