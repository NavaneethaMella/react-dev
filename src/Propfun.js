import Child from './Child'
function Propfun(){
    
  const handleChange = () => { 
       console.log("button clicked")
  }
  return(
    
  <Child onClick={handleChange} >Click</Child>
    )
}
export default Propfun