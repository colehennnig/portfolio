import '../../assets/font.css';
import {DiGithubFull, DiGithubBadge} from 'react-icons/di';
import {BiLinkExternal} from 'react-icons/bi';


function Card(props) {
    return (
        <div className='flex flex-row p-4 w-full h-1/3'>
            <div className='rounded-3xl bg-green-300 p-5 flex flex-row h-full w-full min-w-[10rem]'>
                <img src={props.icon} className='h-full aspect-square drop-shadow-lg '/>
                <div className='ml-5 mr-5 text-green-900 flex flex-col'>
                    <div className='flex content-center'>
                        <div style={{fontFamily: 'SF Mono Bold'}} className='text-4xl'>
                            {props.name}
                        </div>
                        <a href={props.link} target="_blank" rel="noopener noreferrer" className='bg-green-600 flex-initial w-min px-3 ml-3 h-min text-white text-xs rounded-xl transition-all ease-in-out hover:rounded-md duration-200 flex items-center justify-center' style={{fontFamily: 'Bungee'}}>
                            <DiGithubFull size={40}/>
                            <DiGithubBadge size={25}/>
                            <BiLinkExternal size={15} className='ml-1'/>
                        </a>
                    </div>
                    <div style={{fontFamily: 'SF Mono Medium'}} className='mt-2 text-2xl'>
                        {props.description}
                    </div>
                    
                </div>
                <img src={props.image} className={'h-full w-full object-cover rounded-2xl drop-shadow-lg'} />
            </div>
        </div>
    );
}

export default Card;