import '../../assets/font.css';
import Type from './Type';
import {DiCode} from 'react-icons/di';
import React, {useEffect, useState} from 'react';
import {ReactComponent as Graphic} from '../../assets/graphic.svg';
import backdrop from '../../assets/backdrop.svg';
import {ReactComponent as Portrait} from '../../assets/portrait.svg';

function Home() {
    const [pageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
        const onPageLoad = () => {
            setPageLoaded(true);
        };
    
        // Check if the page has already loaded
        if (document.readyState === 'complete') {
            onPageLoad();
        } else {
            window.addEventListener('load', onPageLoad);
            // Remove the event listener when component unmounts
            return () => window.removeEventListener('load', onPageLoad);
        }
    }, [])

    return (
        <div className='text-green-900'>
            <div className='w-screen bg-green-100 px-24 pb-10 pt-24 drop-shadow-lg z-10'>
                <div className={`flex flex-row justify-between items-center transition-all ease-in-out duration-500 ${pageLoaded ? 'opacity-100' : 'opacity-0'} ${pageLoaded ? 'translate-y-0' : 'translate-y-6'}`}>
                    <div>
                        <div style={{fontFamily: 'SF Mono Heavy', fontSize: 80}}>
                            I am Cole Hennig.
                        </div>
                        <div style={{fontFamily: 'SF Mono Semibold', fontSize: 40}}>
                            <Type/>
                        </div>
                    </div>
                    <Graphic className='w-96 h-96 object-right drop-shadow-xl' data/>
                </div>
            </div>
            <div className="p-24 bg-cover bg-center flex flex-row items-center justify-center content-between" style={{backgroundImage: `url(${backdrop})`}}>
                <div className='flex-none'>
                    <div style={{fontFamily: 'SF Mono Bold', fontSize: 50}}>
                        Let me introduce myself.
                    </div>
                    <div style={{fontFamily: 'Viga', fontSize: 25}} className='p-4'>
                        <div className='flex flex-row items-center mt-2' >
                            <div className='bg-green-700 w-3 h-3 rounded-sm mr-4'/>
                            <div>
                                I have always wanted to create, design, and build.
                            </div>
                        </div>
                        <div className='flex flex-row items-center mt-2'>
                            <div className='bg-green-700 w-3 h-3 rounded-sm mr-4'/>
                            <div>
                                Before I discovered programming, I loved to build physical projects.
                            </div>
                        </div>
                        <div className='flex flex-row items-center mt-2'>
                            <div className='bg-green-700 w-3 h-3 rounded-sm mr-4'/>
                            <div>
                                After I took my first programming class, it was all I could think about.
                            </div>
                        </div>
                        <div className='flex flex-row items-center mt-2'>
                            <div className='bg-green-700 w-3 h-3 rounded-sm mr-4'/>
                            <div className='flex flex-row'>
                                Since then I have become fluent in
                                &nbsp;<div className='text-green-600'>Python</div>,
                                &nbsp;<div className='text-green-600'>C</div>, and
                                &nbsp;<div className='text-green-600'>Javascript</div>.
                            </div>
                        </div>
                        <div className='flex flex-row items-center mt-2'>
                            <div className='bg-green-700 w-3 h-3 rounded-sm mr-4'/>
                            <div className='flex flex-row'>
                                I excel in
                                &nbsp;<div className='text-green-600'>ReactJS</div>,
                                &nbsp;<div className='text-green-600'>Figma</div>,
                                &nbsp;<div className='text-green-600'>app development</div>, and
                                &nbsp;<div className='text-green-600'>problem solving</div>.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='items-center content-center justify-center w-full'>
                    <Portrait className='w-3/5 h-min float-right'/>
                </div>
            </div>
        </div>
    );
}

export default Home;