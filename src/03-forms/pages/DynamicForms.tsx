import {Formik, Form} from 'formik'
import { MySelect, MyTextInput } from '../components';

import formJson from '../data/custom-form-.json'
import * as Yup from 'yup';


// console.log('hola mundo',formJason);


const initialValues:{[key:string]: any} = {};
const validationFields: {[key:string]: any} = {};

for (const input of formJson){
    initialValues[input.name] = input.value;

    if( !input.validation )continue;


    let schema = Yup.string()

    for (const rule of input.validation){
        if (rule.type === 'required'){
            schema = schema.required('This field is required 😡')
        }

        if (rule.type == 'minLength'){
            schema = schema.min((rule as any).value || 1,`Characters shloul be ${(rule as any).value} 😜 `)
        }
        if (rule.type == 'email'){
            schema = schema.email('Email is not valid 🤦‍♀️')
        }
    }
    
    validationFields[input.name] = schema;
}

const validationSchema = Yup.object({...validationFields})

export const DynamicForms = () => {
  return (
    <div>
        <h1>Dynamic Forms</h1>

        <Formik 
            initialValues={ initialValues }
            validationSchema={ validationSchema }
            onSubmit = { (values) => {
                console.log('values',values);
                
            }}
        >
            { (formik) => (

                <Form noValidate>
                    {formJson.map( ({type, name, placeholder, label, options}) => {

                        if( type === 'input' || type === 'password' || type === 'email'){
                            
                            return <MyTextInput
                                key={name} 
                                type={type as any} 
                                label={label} 
                                name={name}
                                placeholder={placeholder} 
                            />  
                        } else if (type === 'select'){
                            return (
                                <MySelect
                                    key={name}
                                    label={label}
                                    name={name}
                                >
                                    <option value="">Select an option</option>
                                    {
                                        options?.map(option => (
                                            <option key={option.id} value={option.id}>{option.label}</option>
                                        ))
                                    }
                                </MySelect>
                            )
                        }
                        throw new Error (`The type : ${type} is not supported`)
                    })}

                    <button type='submit'>Submit</button>
                </Form>
               
            )}
        </Formik>
    </div>
  )
}
