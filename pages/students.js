import FormContentComponent from '@/components/FormContentComponent'
import MainContent from '@/components/layout/MainContent'
import React from 'react'

const Students = () => {

    const handleSubmit = () => {
        alert('submited')
    }
    return (
        <>
            <MainContent>
                <FormContentComponent
                    title={'New Student'}
                    onSubmit={handleSubmit}
                >
                    <input
                        className="input_form"
                        name="name"
                        placeholder='name'
                        type='text'
                    />

                    <input
                        className="input_form"
                        name="email"
                        placeholder='email'
                        type='text'
                    />

                    <input
                        className="input_form"
                        name="born_date"
                        placeholder='born_date'
                        type='text'
                    />

                    <select className="input_form" name="gender">
                        <option value="">Select an option</option>
                        <option value="man">Man</option>
                        <option value="female">Female</option>
                    </select>

                    <input
                        className="input_form"
                        name="phone"
                        placeholder='phone'
                        type='text'
                    />

                    <input
                        className="input_form"
                        name="address"
                        placeholder='address'
                        type='text'
                    />

                    <input
                        className="input_form"
                        name="city"
                        placeholder='city'
                        type='text'
                    />

                    <input
                        className="input_form"
                        name="country"
                        placeholder='country'
                        type='text'
                    />
                </FormContentComponent>
            </MainContent>
        </>
    )
}

export default Students
