import style from "./card.module.css" 
function Card(props){
    const title=props.title
    const id= props.id
    const body=props.body

    return(
        <div>
            {/* {console.log("hello")} */}
            
            <section className={style.flex}>
                <h1>{title}</h1>
                <h1>{id}</h1>
            </section>
            <hr></hr>
            <p>{body}</p>
        </div>

    );
} 

export default Card;