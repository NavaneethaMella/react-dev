function Childcom(props){
    return(
        <div>
            <p>The Hobbies are: {props.hobbies ? props.hobbies.join(',') : "No hobbies provided"}</p>
            <p>the Name is : {props.user.name}, and  the Age is : {props.user.age}</p>
        </div>
    )
}
export default Childcom