import React from 'react'

const FormContentComponent = ({ children, title }) => {
    return (
        <>
            <div className='flex-form'>
                <h1 className='text-center'>{title}</h1><br />

                {children}

            </div>
        </>
    )
}

export default FormContentComponent
