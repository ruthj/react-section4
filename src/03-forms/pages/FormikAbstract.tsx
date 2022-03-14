import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { MyCheckbox, MyTextInput, MySelect} from '../components/index'

import '../styles/styles.css'


export const FormikAbstract = () => {

 

  return (
    <div>
        <h1>Formik Abstract</h1>

        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: ''
            }}
            onSubmit={ (values) => {
                console.log('Formik values',values);
                
            }}
            validationSchema={ Yup.object({
                firstName: Yup.string()
                            .max(15, 'Should have 15 characters')
                            .required('Required'),
                lastName: Yup.string()
                            .max(10, 'Should have 10 characters')
                            .required('Required'),
                email: Yup.string()
                            .email('Email not valid')
                            .required('Required'),
                terms: Yup.boolean()
                            .oneOf([true], 'Should accept terms and coditions'),
                jobType: Yup.string()
                            .notOneOf(['it-jr'], 'This option is not allowed')
                            .required()
                
            })}
        >
            {
                (formik) => (
                    <Form >
                        <MyTextInput 
                            label="First Name" 
                            name='firstName' 
                            placeholder='First Name'
                            
                        />
                       
                       <MyTextInput 
                            label="Last Name" 
                            name='lastName' 
                            placeholder='Last Name'
                            
                        />

                        <MyTextInput 
                            label="Email Address" 
                            name='email' 
                            placeholder='email@email.com'
                            type='email'
                        />

                        <MySelect label="Job Type" name='jobType'>
                            <option value="">Select a Job</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-jr">IT Jr</option>
                            <option value="react-dev">React Developer</option>
                        </MySelect>

                        <MyCheckbox label="Terms and Conditios" name='terms' />
                      
                        <button type='submit'>Submit</button>
                    </Form>
                )
            }


        </Formik>

       
    </div>
  )
}
