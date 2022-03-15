import { useForm } from '../hooks/useForm';
import '../styles/styles.css'


export const RegisterPage = () => {

    const {
      onChange,
      resetFrom,
      isValidEmail, 
      formData,
      name,
      email,
      password1,
      password2
    
    } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });
    

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('formData',formData);
        
    }

  return (
    <div >
        <h1>Register Page!!</h1>
        <form noValidate onSubmit={(e) => submitForm(e)}>

            <input 
                type="text"
                placeholder="Name"
                value={name}
                name="name"
                onChange={(event) => onChange(event)}
                className={`${name.trim().length <= 0 && 'has-error'}`}
             />
             { name.trim().length <= 0 && <span>Name is mandatory</span> }

             <input 
                type="email"
                placeholder="Email"
                value={email}
                name="email"
                onChange={(event) => onChange(event)}
                className={`${!isValidEmail(email) && 'has-error'}`}
             />
               { !isValidEmail(email) && <span>Eimal is not valid </span> }

             <input 
                type="password"
                placeholder="Password"
                value={password1}
                name="password1"
                onChange={(event) => onChange(event)}
             />
              { password1.trim().length <= 0 && <span>This field is mandatory</span> }
              { password1.trim().length < 6 && password1.trim().length > 0 && <span>Password should have 6 characters</span> }

             <input 
                type="password"
                placeholder="Repeat password"
                value={password2}
                name="password2"
                onChange={(event) => onChange(event)}
             />
              { password2.trim().length <= 0 && <span>This field is mandatory</span> }
              { password2.trim().length > 0 && password2 !== password1 && <span>Password doesn't match</span> }


             <button type="submit">Create</button>
             <button type='button' onClick={ resetFrom } >Reset</button>
        </form>
    </div>
  )
}
