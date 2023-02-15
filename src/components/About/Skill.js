function Skill({children, padding}) {
    return (
        <div className='w-1/6 h-22 p-3'>
            <div className='h-full w-full p-3 bg-green-400 rounded-2xl text-green-900 shadow-inner transition-all ease-in-out hover:scale-105'>
                <div className={'drop-shadow-md p-' + padding}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Skill;