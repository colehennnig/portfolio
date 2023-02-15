import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import {BsCheckLg, BsLinkedin} from 'react-icons/bs';
import {BiLinkExternal} from 'react-icons/bi';
import {ReactComponent as Waves} from '../../assets/waves.svg';

function Contact() {
    const form = useRef();
    const [sent, setSent] = useState(false);
    const LILink = 'https://www.linkedin.com/in/cole-hennig-46216b18b/';

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_4qh102f', 'template_zj4sm1l', form.current, 'tyyquPzvzJGRgzWKk')
            .then((result) => {
                console.log(result.text);
                setSent(true);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
      };
    
    return (
        <div className='w-screen h-screen pt-14 text-green-900'>
            <Waves className='absolute bottom-0 w-screen'/>
            <div className='text-5xl pl-8 pt-8' style={{fontFamily: 'Bungee'}}>
                Contact Me
            </div>
            <div className='flex flex-row p-5' style={{fontFamily: 'SF Mono Bold'}}>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col w-1/2 p-5'>
                    <label style={{fontSize: 30}}>Name</label>
                    <input placeholder='Name' type="name" name="from_name" style={{outline: 'none'}} className='rounded-lg p-2 bg-green-50 border-green-600 border-4 transition-all ease-in-out focus:border-l-8 mb-2'/>
                    <label style={{fontSize: 30}}>Email</label>
                    <input placeholder='Email' type="email" name="user_email" style={{outline: 'none'}} className='rounded-lg p-2 bg-green-50 border-green-600 border-4 transition-all ease-in-out focus:border-l-8 mb-2'/>
                    <label style={{fontSize: 30}}>Message</label>
                    <textarea placeholder='Message' name="message" style={{outline: 'none'}} className='rounded-lg p-2 bg-green-50 border-green-600 border-4 transition-all ease-in-out focus:border-l-8 mb-2'/>
                    <label className='flex flex-row items-center content-between bg-green-700 rounded-xl w-min px-2 mt-2 text-white transition-all ease-in-out hover:rounded-md hover:drop-shadow cursor-pointer'>
                        <input type="submit" value="Send" style={{fontFamily: 'Bungee', fontSize: 30}}/>
                        <BsCheckLg size={30} className={`overflow-hidden transition-[width] ease-in-out ${sent ? 'w-10' : 'w-0'}`}/>
                    </label>
                </form>
                <div className='w-1/2 p-5'>
                    <div className='bg-green-900 rounded-xl w-full h-full overflow-hidden drop-shadow relative'>
                        <img className='h-1/2 aspect-square absolute rounded-full translate-x-1/4 translate-y-1/4 border-green-900 border-8' src='https://media.licdn.com/dms/image/D5635AQGSHq4Iv7yxng/profile-framedphoto-shrink_400_400/0/1673393525026?e=1676412000&v=beta&t=G8F4NaNwIo0fZD5BE57PO2x6lf0ygSqpb4EkFsC3VhU'/>
                        <img className='h-1/2 w-full object-cover' src='https://media.licdn.com/dms/image/C5616AQHTaJGrCbk1GA/profile-displaybackgroundimage-shrink_350_1400/0/1663682809209?e=1681344000&v=beta&t=RzcAwV0vr4buIXpYNjFy1snBFI1o6afYf5xCsbKrM08'/>
                        <div className='text-green-100 flex flex-row items-center content-between gap-4 h-1/2 p-10 text-4xl'>
                            <BsLinkedin className='flex-none'/> 
                            <div className='flex-none'>
                                <div>
                                    Cole Hennig
                                </div>
                                <div className='text-xs p-1'>
                                    University of California, Santa Cruz
                                </div>
                            </div>
                            <div className='w-auto flex-1'>
                                <a href={LILink} target="_blank" rel="noopener noreferrer" className='text-3xl flex flex-row bg-green-600 rounded-xl w-min h-min text-center items-center justify-center p-1 pl-2 float-right transition-all ease-in-out hover:rounded-md' style={{fontFamily: 'Bungee'}}>
                                    Connect
                                    <BiLinkExternal className='p-1 ml-1'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;