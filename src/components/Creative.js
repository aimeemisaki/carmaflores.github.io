import React from "react";
import blondedImg from '../assets/blondedImg.jpeg';
import blondedImg1 from '../assets/blondedImg1.png';
import blondedImg2 from '../assets/blondedImg2.png';
import blondedImg3 from '../assets/blondedImg3.png';
import blondedImg4 from '../assets/blondedImg4.png';
import blotterImg from '../assets/blotterImg.jpeg'


function Creative () {
    return (
    <>
    <div className='grid grid-cols-3 gap-20'>
            <div className='flex flex-col'>
                <p className='text-right pl-8'>
                    I.
                </p>
                <p className='text-right'>
                    Creative Direction
                </p>
            </div>
            <div className=''>
                <img src={blondedImg} 
                alt='Main Blonded'
                className='blonded-main-img'/>
                
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
        </div>
        <div className=''>
                <div className='alt-images flex flex-row overflow-x-auto'>
                    <img 
                    src={blondedImg1} 
                    alt="Blonded Styling" 
                    className='alt-image blonded-img-1'/>
                    <img 
                    src={blondedImg2} 
                    alt="Blonded Styling"
                    className='alt-image blonded-img-2' />
                    <img 
                    src={blondedImg3}
                    alt='Blonded Styling'
                    className='alt-image blonded-img-3' />
                    <img 
                    src={blondedImg4}
                    alt='Blonded Styling'
                    className='alt-image blonded-img-4' />
                </div>
        </div>
        <div className='grid grid-cols-3 gap-20 py-8'>
            <div className='flex flex-col'>
                <p className='text-right pl-8'>
                    II.
                </p>
                <p className='text-right'>
                    Creative Direction
                </p>
            </div>
            <div className=''>
                <img src={blotterImg} 
                alt='Main Blotter'
                className='blotter-main-img'/>
                
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
        </div>
    </>
    )
}

export default Creative