import FormContentComponent from '@/components/FormContentComponent'
import MainContent from '@/components/layout/MainContent'
import React from 'react'

const Signup = () => {

    const handleSubmit = () => {
        alert('submited')
    }
    return (
        <>
            <MainContent>
            <FormContentComponent
                title={'Sign Up'}
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
                    name="phone"
                    placeholder='phone'
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
                    name="email"
                    placeholder='email'
                    type='email'
                />
                <input
                    className="input_form"
                    name="password"
                    placeholder='password'
                    type='password'
                />
                <select className="input_form" name="role">
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                </select>

                </FormContentComponent>
            </MainContent>
        </>
    )
}

export default Signup

