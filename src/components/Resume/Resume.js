import '../../assets/font.css';
import React from 'react';
import {ReactComponent as MyResume} from '../../assets/Resume.svg';

function Resume() {
    return (
        <div className="w-screen">
            <div className='w-screen h-14'/>
            <div className='text-5xl text-green-900 p-8' style={{fontFamily: 'Bungee'}}>
                Resume
            </div>
            <MyResume className='w-screen h-auto justify-center drop-shadow-lg px-16 pb-16'/>
        </div>
    );
}

export default Resume;