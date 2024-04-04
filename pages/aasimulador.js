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
                        placeholder='product_type'
                        type='text'
                        onChange={handleChange}
                    />
                    <input
                        className="input_form"
                        name="humidity"
                        placeholder='humidity'
                        type='text'
                        onChange={handleChange}
                    />
                    <input
                        className="input_form"
                        name="dry_time"
                        placeholder='dry_time'
                        type='text'
                        onChange={handleChange}
                    />
                    <input
                        className="input_form"
                        name="hot_temperature"
                        placeholder='hot_temperature'
                        type='text'
                        onChange={handleChange}
                    />
                    <input
                        className="input_form"
                        name="cold_temperature"
                        placeholder='cold_temperature'
                        type='text'
                        onChange={handleChange}
                    />
                    <input
                        className="input_form"
                        name="weight"
                        placeholder='weight'
                        type='text'
                        onChange={handleChange}
                    />
                    <input
                        className="input_form"
                        name="weight_type"
                        placeholder='weight_type'
                        type='text'
                        onChange={handleChange}
                    />


                </FormContentComponent>
            </MainContent >
        </>
    )
}

export default Signin

