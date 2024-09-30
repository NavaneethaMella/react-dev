import {useFormik} from 'formik'
import * as Yup from "yup"
function Forms(){
    const formik=useFormik({initialValues:{
        fname:'',
        lname:'',
        password:''
    },
    validationSchema:Yup.object({
        fname:Yup.string()
        .max(15,"must be 15 orless characters required")
        .required("required"),
        lname:Yup.string()
        .max(10,"atleast 10 or less than 10 are required")
        .required("required"),
        password:Yup.string()
        .max(20,"must have 20 or les than 20 characters")
        .required('required')
    }),
    onSubmit:(values)=>{
      console.log('form submited',values)
    },
    
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