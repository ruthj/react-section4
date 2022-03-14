import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css'


export const FormikComponents = () => {

 

  return (
    <div>
        <h1>Formik Components</h1>

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
                        <label htmlFor="firstName">First Name:</label>
                        <Field  name="firstName" type="text" />
                        <ErrorMessage name='firstName' component="span" />

                        <label htmlFor="lastName">Last Name:</label>
                        <Field  name="lastName" type="text" />
                        <ErrorMessage name='lastName' component="span"/>

                        <label htmlFor="email">Email:</label>
                        <Field  name="email" type="text" />
                        <ErrorMessage name='email' component="span"/>

                        <label htmlFor="jobType">Job Type:</label>
                        <Field  name="jobType" as="select" >
                            <option value="">Select a Job</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-jr">IT Jr</option>
                            <option value="react-dev">React Developer</option>
                        </Field>
                        <ErrorMessage name='jobType' component="span"/>

                        <label>
                            Terms and Conditions:
                            <Field name="terms" type="checkbox" />
                        </label>
                        
                        <ErrorMessage name='terms' component="span"/>

                        

                        <button type='submit'>Submit</button>
                    </Form>
                )
            }


        </Formik>

       
    </div>
  )
}
