import Childcom from './Childcom'
function Propasarray(){
    const hobbies = ["reading" , "dancing", "writing"]
    const user = {name:"bhanu" , age:"10"}
    return(
        <Childcom hobbies={hobbies}
        user={user} />
    )
}
export default Propasarray