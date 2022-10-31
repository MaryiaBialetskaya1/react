const Grocery = (props) =>{
    return(
        <div>
            <img src={props.img} alt="Software Developer" width="300px"/>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default Grocery;