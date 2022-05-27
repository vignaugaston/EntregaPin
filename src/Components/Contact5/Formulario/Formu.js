import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "./Formu.scss";


function Formu() {

    const initialValues = { 
        name: "", 
        email: "", 
        phone: "",
        message: "",
    };
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [formSubmit, setFormSubmit] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault()
        setFormErrors(validate(formValues))
        setFormSubmit(true)

        // http://jsonplaceholder.typicode.com/posts
        // http://127.0.0.1:8000/api/contacto

        axios({
            url: 'http://127.0.0.1:8000/api/contacto',
            method: 'POST',
            data: formValues
          })
          .then( result => {
            console.log(result)
            setFormSubmit(true)
            setFormValues({name: "", email: "", phone: "", message: ""})
          })
          .catch( error => 
            console.log(error))
        };
    
      useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && formSubmit) {
          console.log(formValues);
        }
      }, [formErrors]);
      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.name) {
          errors.name = "El nombre es requerido";
        }
        if (!values.email) {
          errors.email = "El email es requerido";
        } else if (!regex.test(values.email)) {
          errors.email = "Email invalido";
        }
        if (!values.phone) {
          errors.phone = "El numero de telefono es requerido";
        } else if (values.phone.length < 6) {
          errors.phone = "El numero de telefono debe tener mas de 6 caracteres";
        } else if (values.phone.length > 14) {
          errors.phone = "El numero de telefono debe tener menos de 14 caracteres";
        }
        if (!values.message) {
          errors.message = "El mensaje es requerido";
        } else if (values.message.length < 15) {
            errors.message = "El mensaje debe tener mas de 15 caracteres";
        } else if (values.message.length > 350) {
            errors.message = "El mensaje debe tener menos de 350 caracteres";
        }
        return errors;
      };

        return (
        <div>
            <div>
                <form className="firstForm" target="_parent" onSubmit={handleSubmit}>
                    <div>
                        <input
                            className="imputClass"
                            type="text"
                            id="name"
                            name="name"
                            placeholder='Name'
                            value={formValues.name}
                            onChange={handleChange}
                            // required 
                            />
                    </div>
                    <p className='errorMessage'>{formErrors.name}</p>
                    <div>
                        <input
                            className="imputClass"
                            type="email"
                            id="email"
                            name="email"
                            placeholder='Email'
                            value={formValues.email}
                            onChange={handleChange}
                            // required 
                            />
                    </div>
                    <p className='errorMessage'>{formErrors.email}</p>
                    <div>
                        <input
                            className="imputClass"
                            type="number"
                            id="phone"
                            name="phone"
                            placeholder='Phone'
                            value={formValues.phone}
                            onChange={handleChange}
                            // required
                            />
                    </div>
                    <p className='errorMessage'>{formErrors.phone}</p>
                    <div>
                        <textarea
                            className="imputClass"
                            cols="48"
                            rows="3"
                            id="message"
                            name="message"
                            placeholder='Message'
                            value={formValues.message}
                            onChange={handleChange}></textarea>
                    </div>
                    <p className='errorMessage'>{formErrors.message}</p>
                    <button
                        className="secondButton"
                        type="submit"
                        >Send</button>
                </form>

              {Object.keys(formErrors).length === 0 && formSubmit ? (
                <div className="alertMessage">¡Mensaje enviado!</div>)
                : (<pre className='preJson'>{JSON.stringify(formValues, undefined, 2)}</pre>)
            }
            </div>

        </div>
    );
}

export default Formu;
