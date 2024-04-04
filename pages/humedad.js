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
                    title={'simulador'}
                    onSubmit={handleSubmit}
                >

                    <input
                        className="input_form"
                        name="product_type"
                        placeholder='intial_weight'
                        type='text'
                        onChange={handleChange}
                    />
                    <input
                        className="input_form"
                        name="humidity"
                        placeholder='final_weight'
                        type='text'
                        onChange={handleChange}
                    />
                    <input
                        className="input_form"
                        name="dry_time"
                        placeholder='hour_percentage'
                        type='text'
                        onChange={handleChange}
                    />


                    total_humidity %95

                </FormContentComponent>
            </MainContent >
        </>
    )
}

export default Signin

