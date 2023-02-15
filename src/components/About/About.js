import Skill from './Skill';
import {DiReact, DiNodejsSmall, DiPython, DiPostgresql, DiSwift, DiJsBadge, DiHtml5, DiVisualstudio} from 'react-icons/di';
import {GrReactjs} from 'react-icons/gr';
import {SiXcode, SiSketchup, SiExpo, SiTailwindcss, SiCplusplus, SiMicrosoftexcel, SiFirebase} from 'react-icons/si';
import {VscTerminalLinux} from 'react-icons/vsc';
import {FiFigma} from 'react-icons/fi';
import {MdDesignServices} from 'react-icons/md';
import {FaTools} from 'react-icons/fa';
import {TbMathFunction} from 'react-icons/tb';
import Type from './Type';
import '../../assets/font.css';
import programming from '../../assets/programming.jpg';
import designing from '../../assets/designing.jpeg';
import building from '../../assets/building.jpeg';

function About() {
    return (
        <div className='text-green-900'>
            <div className='bg-green-100 drop-shadow-lg p-8 mt-14 relative z-10'>
                <div className='text-5xl' style={{fontFamily: 'Bungee'}}>
                    About Me
                </div>
                <div className='text-3xl pt-8' style={{fontFamily: 'Viga'}}>
                    I am a collaborative computer science student. Eager to work anywhere I can 
                    in the computer science field to get more experience. My long-term goal is 
                    to work with a software development team and potentially become a project 
                    manager myself. I hope my work can help the community or anyone in need.
                </div>
            </div>
            <div className='bg-green-100 drop-shadow-lg p-8'>
                <div className='text-4xl p-2' style={{fontFamily: 'Bungee'}}>
                    My main three passions are ...
                </div>
                <div className='flex flex-row '>
                    <div className='w-1/3 p-2'>
                        <div className='text-5xl text-white absolute p-2 drop-shadow-lg z-10' style={{fontFamily: 'Bungee'}}>
                            Programming
                        </div>
                        <img src={programming} className='object-cover rounded-lg h-full brightness-90 z-0'/>
                    </div>
                    <div className='w-1/3 p-2'>
                        <div className='text-5xl text-white absolute p-2 drop-shadow-lg' style={{fontFamily: 'Bungee'}}>
                            Designing
                        </div>
                        <img src={designing} className='object-cover rounded-lg h-full'/>
                    </div>
                    <div className='w-1/3 p-2'>
                        <div className='text-5xl text-white absolute p-2 drop-shadow-lg' style={{fontFamily: 'Bungee'}}>
                            Building
                        </div>
                        <img src={building} className='object-cover rounded-lg h-full'/>
                    </div>
                </div>
                <div className='text-center w-full text-3xl pt-6' style={{fontFamily: 'Viga'}}>
                    My hope is to be able to utilize all my passions in my career.
                </div>
            </div>
            <div className='p-8'>
                <div className='pl-3 flex flex-row' style={{fontFamily: 'SF Mono Bold', fontSize: 70}}>
                    <div>
                        My Skills:&nbsp;
                    </div>
                    <div className='text-green-700'>
                        <Type/>
                    </div>
                </div>
                <div className="w-full flex flex-row flex-wrap">
                    <Skill padding={5}>
                        <svg viewBox="0 0 128 128">
                            <path fill='#14532D' d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zM64 88.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5z"></path>
                        </svg>
                    </Skill>
                    <Skill padding={5}>
                        <GrReactjs size={'100%'}/>
                    </Skill>
                    <Skill padding={5}>
                        <DiJsBadge size={'100%'}/>
                    </Skill>
                    <Skill>
                        <DiNodejsSmall size={'100%'}/>
                    </Skill>
                    <Skill>
                        <DiPython size={'100%'}/>
                    </Skill>
                    <Skill padding={1}>
                        <DiHtml5 size={'100%'}/>
                    </Skill>
                    <Skill padding={5}>
                        <FiFigma size={'100%'}/>
                    </Skill>
                    <Skill padding={5}>
                        <SiCplusplus size={'100%'}/>
                    </Skill>
                    <Skill padding={5}>
                        <SiExpo size={'100%'}/>
                    </Skill>
                    <Skill>
                        <DiVisualstudio size={'100%'}/>
                    </Skill>
                    <Skill padding={5}>
                        <SiFirebase size={'100%'}/>
                    </Skill>
                    <Skill padding={5}>
                        <SiMicrosoftexcel size={'100%'}/>
                    </Skill>
                    <Skill padding={5}>
                        <SiTailwindcss size={'100%'}/>
                    </Skill>
                    <Skill>
                        <DiPostgresql size={'100%'}/>
                    </Skill>
                    <Skill padding={5}>
                        <SiXcode size={'100%'} className='ml-1'/>
                    </Skill>
                    <Skill padding={5}>
                        <VscTerminalLinux size={'100%'}/>
                    </Skill>
                    <Skill>
                        <DiSwift size={'100%'}/>
                    </Skill>
                    <Skill padding={5}>
                        <SiSketchup size={'100%'}/>
                    </Skill>
                </div>
            </div>
        </div>
    );
}

export default About;