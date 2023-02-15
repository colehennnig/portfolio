import '../../assets/font.css';
import Card from './Card';
import turingTrustIcon from '../../assets/TuringTrustApp.png';
import modioIcon from '../../assets/Modio.png';
import tossTimeIcon from '../../assets/TossTime.png';
import turingTrustImage from '../../assets/TuringTrustPicture.png';
import modioImage from '../../assets/music.jpeg';
import tossTimeImage from '../../assets/dyepicture.png';

function Projects() {
    return (
        <div>
            <div className='w-screen h-14'/>
            <div className='text-5xl text-green-900 pl-8 pt-8' style={{fontFamily: 'Bungee'}}>
                Projects
            </div>
            <div className='w-screen h-screen p-4'>
                <Card   name='Turing Trust Scanner' 
                        icon={turingTrustIcon} 
                        description={'I created this application to help the Turing Trust automate the process of uploading asset information to Google Sheets with the ability to scan barcodes.'}
                        image={turingTrustImage}
                        link={'https://github.com/colehennnig/TuringTrustScanner'}
                />
                <Card   name='Modio' 
                        icon={modioIcon}
                        description={'I worked with a team of three developers to create an application that will allow musicians, from anywhere in the world, with any instrument or just their voice, to make songs together.'}
                        image={modioImage}
                        link={'https://github.com/haitranho/ua_project'}
                />
                <Card   name='Toss Time'
                        icon={tossTimeIcon}
                        description={'I worked with a team of five developers to create an application that could enable people to find others to get together to play a social game called Dye using the Google Maps Api.'}
                        image={tossTimeImage}
                        link={'https://github.com/antonkozi/TossTime'}
                />
            </div>
        </div>
    );
}

export default Projects;