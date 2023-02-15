function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <div className='flex flex-row h-14 w-screen bg-green-200 text-orange-800' style={{fontFamily: "SF Mono Medium"}}>
            <div className='flex-1 flex items-center justify-center'>
                Designed and Developed by Cole Hennig
            </div>
            <div className='flex-1 flex items-center justify-center'>
                Copyright © {year} CH
            </div>
        </div>
    );
}

export default Footer;