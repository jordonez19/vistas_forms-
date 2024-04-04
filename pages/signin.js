import FormContentComponent from '@/components/FormContentComponent'
import MainContent from '@/components/layout/MainContent'
import React, { useState } from 'react'
import axios from 'axios'


const Signin = () => {


    const [formData, setFormData] = useState({})


    const handleSubmit = async () => {
        const respuesta = await axios.post('url_q_da_el_back', formData)

        if (respuesta.status === 200) {
            alert('Usuario logueado')
            // redirigir a la pagina de inicio
        } else {
            alert('Usuario no logueado')
            alert(respuesta.message)
            
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <>
            <MainContent>
                <FormContentComponent
                    title={'Sign in'}
                    onSubmit={handleSubmit}
                >

                    <input
                        className="input_form"
                        name="email"
                        placeholder='email'
                        type='email'
                        onChange={handleChange}
                    />

                    <input
                        className="input_form"
                        name="password"
                        placeholder='password'
                        type='password'
                        onChange={handleChange}
                    />

                </FormContentComponent>
            </MainContent >
        </>
    )
}

export default Signin

