import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const Nav = () => {
    const [isOpen, setIsOpen] = useState('hidden');
    const [selected, setSelected] = useState('home')
    const isMobile = useMediaQuery({ maxWidth: 767 })

    const closeMobileMenu = () => {
        setIsOpen(isOpen == 'visible' ? 'hidden' : 'visible')

    }
    if (isMobile) {
        return (
            <>
                {isOpen !== 'visible' &&
                    (<div className='absolute right-5 top-3'>
                        <div onClick={() => closeMobileMenu()} className='bg-white p-3 rounded-full' >
                            <i className="fa-solid fa-bars"></i>
                        </div>
                    </div>)
                }
                <div className={`w-full ${isOpen}`} >
                    <div className='bg-white  fixed top-0 bottom-0 h-full z-40  w-[70%]'>
                        <ul className='flex flex-col gap-6 p-4'>
                            <li className='self-end' onClick={() => closeMobileMenu()}>X</li>
                            <a href="#home" onClick={() => setSelected('home')} className={`${selected == 'home' ? "font-bold text-green-600" : ""}`}><li>Home</li></a>
                            <a href="#skills" onClick={() => setSelected('skills')} className={`${selected == 'skills' ? "font-bold text-green-600" : ""}`}><li>Skills</li></a>
                            <a href="#exp" onClick={() => setSelected('exp')} className={`${selected == 'exp' ? "font-bold text-green-600" : ""}`}><li>Experience</li></a>
                            <a href="#project" onClick={() => setSelected('project')} className={`${selected == 'project' ? "font-bold text-green-600" : ""}`}><li>Project</li></a>
                            <a href="#contact" onClick={() => setSelected('contact')} className={`${selected == 'contact' ? "font-bold text-green-600" : ""}`}><li>Contact</li></a>
                        </ul>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className={`w-full`} >
                    <div className='z-100 bg-white rounded-full   fixed top-12 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <ul className='flex gap-8 px-4 py-3'>
                            <a href="#home" onClick={() => setSelected('home')} className={`${selected == 'home' ? "font-bold text-green-600" : ""}`}><li>Home</li></a>
                            <a href="#skills" onClick={() => setSelected('skills')} className={`${selected == 'skills' ? "font-bold text-green-600" : ""}`}><li>Skills</li></a>
                            <a href="#exp" onClick={() => setSelected('exp')} className={`${selected == 'exp' ? "font-bold text-green-600" : ""}`}><li>Experience</li></a>
                            <a href="#project" onClick={() => setSelected('project')} className={`${selected == 'project' ? "font-bold text-green-600" : ""}`}><li>Project</li></a>
                            <a href="#contact" onClick={() => setSelected('contact')} className={`${selected == 'contact' ? "font-bold text-green-600" : ""}`}><li>Contact</li></a>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}
