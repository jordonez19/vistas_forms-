import AvatarComponent from '@/components/AvatarComponent'
import FormContentComponent from '@/components/FormContentComponent'
import MainContent from '@/components/layout/MainContent'
import React, { useState } from 'react'

const Profile = () => {

    const [open, setOpen] = useState(false)

    const handleSubmitPhoto = () => {
        alert('submited update photo profile')
    }

    const handleSubmit = () => {
        alert('submited update photo profile')
    }

    return (
        <>
            <MainContent>
                <FormContentComponent
                    title={'Profile'}
                    onSubmit={handleSubmit}
                >
                    <AvatarComponent submit={handleSubmitPhoto} />
                    <input
                        className="input_form"
                        name="email"
                        placeholder='email'
                        type='email'
                    />


                    <button className='btn' onClick={() => setOpen(!open)} >{open ? "unchange password" : "change password"}</button>
                    {open ?
                        <input
                            className="input_form"
                            name="password"
                            placeholder='password'
                            type='password'
                        />
                        :
                        null
                    }

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
                    <textarea
                        className="input_form"
                        name="description"
                        placeholder='description'
                        rows={5}
                    />

                </FormContentComponent>
            </MainContent>
        </>
    )
}

export default Profile
