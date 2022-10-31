const Instagram = (props) =>{
    //console.log(props.blog)
    return(
        <div>
            <h1>{props.blog}</h1>
            <p>{props.posts}</p>
            <p>{props.followers}</p>
            <p>{props.following}</p>
        </div>
    )
}

export default Instagram;
