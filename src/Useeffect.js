import { useEffect ,useState} from "react"
function Useeffect(){
    const [count , setCount] = useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            setCount(count => count+1);
        },2000)
    })

    return(
    <div>
        <h1>It has rendered {count} times</h1>
    </div>
    )
}
export default Useeffect