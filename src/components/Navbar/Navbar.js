import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import NavButton from './NavButton';

function Navbar(props) {
    return (
        <div className="w-screen h-14 bg-green-400 flex flex-row items-center p-2 fixed z-50 drop-shadow-lg">
            <Link to={'/'} className='w-auto h-full flex-none fill-green-900 transition-all ease-in-out hover:translate-x-3 hover:drop-shadow-md' >
                <Logo className='w-auto h-full'/>
            </Link>
            <div className='h-full flex flex-row flex-1 gap-2 content-between'>
                <div className='flex-1'/>
                <NavButton name='Home' path='/'/>
                <NavButton name='About' path='/About'/>
                <NavButton name='Resume' path='/Resume'/>
                <NavButton name='Projects' path='/Projects'/>
                <NavButton name='Contact' path='/Contact'/>
            </div>
        </div>
    );
}

export default Navbar;