import React from 'react'

const FormContentComponent = ({children, title, onSubmit}) => {
    return (
        <>
            <div className='flex-form'>
                <h1 className='text-center'>{title}</h1><br />
                
                {children}
                <button onClick={onSubmit} className='btn'>Save</button>
                
            </div>
        </>
    )
}

export default FormContentComponent
