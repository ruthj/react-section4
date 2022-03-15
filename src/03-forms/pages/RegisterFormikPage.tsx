import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { MyTextInput } from '../components'
import '../styles/styles.css'


export const RegisterFormikPage = () => {
 
    

  return (
    <div >
        <h1>Register Formik Page</h1>
        
        <Formik
          initialValues={{
            name:'',
            email: '',
            password: '',
            password2: '',
          }}

          onSubmit={(values) => {
            console.log('RegisterFormik',values);
            
          }}


          validationSchema={ Yup.object({
            name: Yup.string()
                          .max(15, 'Should not have more than 15 characters')
                          .min(2, 'Name should have more that two characters')
                          .required('Name is requeried'),
            email: Yup.string() 
                      .email()
                      .required('Email field is requiered'),
            password: Yup.string()
                          .required('Password field is requiered')
                          .min(6, 'Password should have at least 6 characters'),
            password2: Yup.string()
                          .required('Password field is requiered')
                          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          })}
        >

            {
              ({ handleReset }) => (
                <Form> 
                    <MyTextInput
                      label='Name' 
                      name='name'
                      placeholder='Name'
                    />

                    <MyTextInput 
                      label='Email Address' 
                      name='email'
                      type='email'
                      placeholder='john@gmail.com' 
                    />
                    <MyTextInput 
                      label='Password' 
                      name='password'
                      type='password'
                      
                    />
                    <MyTextInput 
                      label='Confirm Password' 
                      name='password2'
                      type='password'
                    />

                    <button type="submit">Create</button>
                    <button type='button' onClick={handleReset}> Reset </button>
                </Form>
              )
            }
           
          
            
        </Formik>
    </div>
  )
}
