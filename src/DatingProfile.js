const DatingProfile = (props) =>{
    return(
        <div>
            <img src={props.img} alt="Software Developer" width="300px"/>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default DatingProfile;
