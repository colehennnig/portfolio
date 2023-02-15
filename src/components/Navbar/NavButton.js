import '../../assets/font.css';
import {Link, useLocation} from 'react-router-dom';

function NavButton(props) {
    const location = useLocation();
    const pathname = location.pathname;
    return (
        <Link to={props.path} className={`${pathname === props.path ? 'bg-green-800' : 'bg-green-600'} flex-initial w-auto p-3 h-full text-white rounded-xl transition-all ease-in-out hover:rounded-md hover:drop-shadow-md duration-200 flex items-center justify-center`} style={{fontFamily: 'Bungee'}}>
            {props.name}
        </Link>
    );
}

export default NavButton;