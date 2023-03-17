import React from 'react';
import placeholderImg from '../assets/placeholderImg.png'

function FashionStyling () {
    return (
        <>
        <div className='grid grid-cols-3 gap-20'>
            <div className='flex flex-col'>
                <p className='text-right pl-8'>
                    I.
                </p>
                <p className='text-right'>
                    Fashion Styling
                </p>
                </div>
            <div className='flex flex-col'>
                <img src={placeholderImg} alt='replace'/>
                <p className='text-center text-lg' >Fashion Assistance</p>
            </div>
            
            <div className='flex flex-col'>
                    <p>
                    CREATIVE ART DIRECTION / DIRTY SON AGENCY
                    </p>
                    <p>
                    YEAR:
                    </p>
                    <p>
                    CREDITS:
                    </p>
                </div>
            <div>

            </div>
        </div>
        </>
    )
}

export default FashionStyling