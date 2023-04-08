import React from "react";
import blondedImg from '../assets/blondedImg.jpeg';
import blondedImg1 from '../assets/blondedImg1.png';
import blondedImg2 from '../assets/blondedImg2.png';
import blondedImg3 from '../assets/blondedImg3.png';
import blondedImg4 from '../assets/blondedImg4.png';
import blotterImg from '../assets/blotterImg.jpeg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";


function Creative () {
    return (
    <>
    <div className='work-containers'>
        <div className='work-container'>
                <div className='flex flex-col cols-span-1'>
                    <p className='text-left sm:text-right'>
                        I.
                    </p>
                    <p className='text-right text-title'>
                        Creative Art Direction
                    </p>
                </div>
                <div className='main-img-container'>
                    <img src={blondedImg} 
                    alt='Main Blonded'
                    className='blonded-main-img main-img'/>
                    
                </div>
                <div className='text-section'>
                <p className="text-title">
                    <a href="http://dirty-snow.com/">
                        Dirty Snow <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                    </a> 
                    for
                    <a href='https://blonded.co/'> BLONDED <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a>
                </p>
                    <p>
                    YEAR: 2019
                    </p>
                </div>
            </div>
        </div>
        <div className=''>
                <div className='overflow-images flex flex-row'>
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
                    <img src={blotterImg} 
                    alt='Main Blotter'
                    className='alt-image blotter-main-img'/>
                </div>
        </div>
    </>
    )
}

export default Creative