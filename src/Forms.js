import {useFormik} from 'formik'
function Forms(){
    const formik=useFormik({initialValues:{
        fname:'',
        lname:'',
        age:'',
        email:'',
        password:''
    },
    onSubmit:(values)=>{
      console.log('form submited',values)
    },
    validate:(values)=>{
        const errors={}
        if(!values.fname){
            errors.values="required"
        }
        if(!values.lname){
            errors.values="required"
        }
        if(!values.age){
            errors.values="required"
        }
        if(!values.email){
            errors.values="required"
        }
        if(!values.password){
            errors.values="required"
        }
        return errors
    }
})
   return(
     <form onSubmit={formik.handleSubmit}>
        <div>
            <label>Firstname</label>
            <input type="text"
            name="fname"
            id="fname"
            onChange={formik.handleChange}
            value={formik.values.fanme}
            />
         {formik.errors.fname ? <div>{formik.errors.fname}</div> : null}
        </div>
        <div>
            <label>Lastname</label>
            <input type="text"
            name="lname"
            id="lname"
            onChange={formik.handleChange}
            value={formik.values.lname}
            />
            {formik.errors.lname ? <div>{formik.errors.lname}</div> : null}
        </div>

        <div>
            <label>Age</label>
            <input type="number"
            name="age"
            id="age"
            onChange={formik.handleChange}
            value={formik.values.age}
            />
            {formik.errors.age ? <div>{formik.errors.age}</div> : null}
        </div>
        <div>
            <label>Email</label>
            <input type ="emial"
            name="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            />
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </div>

        <div>
            <label>Password</label>
            <input type="password"
            name="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            />
            {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        </div>
     </form>

)
}
export default Forms