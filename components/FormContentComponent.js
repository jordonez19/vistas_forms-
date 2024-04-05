import React from 'react'

const FormContentComponent = ({ children, title }) => {
    return (
        <>
            <div className='flex-form zoomIn'>
                <h3 className='text-center text-uppercase'>{title}</h3><br />

                {children}

            </div>
        </>
    )
}

export default FormContentComponent
