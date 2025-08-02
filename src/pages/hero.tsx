import { useGSAP } from '@gsap/react'
import { SplitText } from "gsap/all";
import gsap from 'gsap'

export const Hero = () => {
    useGSAP(() => {
        const heroSplit = SplitText.create('.hero-header', { type: 'chars,words' });
        const heroDesc = SplitText.create('#hero-desc', { type: 'lines' })

        const heroTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#home',
                start: 'bottom bottom'
            }
        });
        heroTimeline.from('#desc-box', { opacity: 0, y: 100, ease: 'power1.inOut' })

        gsap.from(heroSplit.chars, { ease: 'power1.inOut', stagger: 0.1, duration: 0.5, yPercent: 100 });
        gsap.from(heroDesc.lines, { opacity: 0, duration: 0.5, stagger: 0.2, ease: 'power1.inOut', yPercent: 100 });


    }, [])
    return (
        <>
            <section id='home' className='bg-moon h-screen '>
                <div className="content p-4 pt-22 sm:p-22 sm:pt-30">
                    <div className='badge' >
                        Creative Front End Developer
                    </div>
                    <div className='hero-header text-white text-5xl sm:text-8xl font-bold italic text-gradient'>
                        Jackson <br /> Immanuel S
                    </div>
                    <p id='hero-desc' className=' text-white sm:text-lg text-sm text-justify max-w-[800px]'>
                        Front-end Developer with hands-on experience in building responsive web applications using React and Angular.
                        Skilled in crafting dynamic user interfaces and ensuring seamless user experiences across devices.
                        Proficient in integrating front-end components with backend data using SQL for efficient data handling.
                    </p>
                    <button className='rounded-md bg-green-600 mt-3 hover:bg-green-800 text-white py-1 px-4 cursor-pointer'>🚀 Contact Me</button>
                </div>
            </section>
            <div id='desc-container' className='h-full pb-12 px-3 pt-14  sm:px-19 bg-black'>
                <div className='bg-white text-white'>hi</div>
                <div id='desc-box' className='min-h-36 -mt-24 rounded-md p-3 sm:py-6 bg-white'>
                    <div>
                        <div className='rounded-full mb-2 items-center text-xs font-normal inline-flex px-2 py-1 cursor-pointer bg-black'>
                            <div className='text-white me-1 '>
                                👨🏻‍🔬  About Me
                            </div>

                        </div>
                        <div className='text-xl sm:text-2xl font-medium'>
                            Passionate <span className='text-green-600'> Front-End Developer </span>
                        </div>
                    </div>

                    <div className='leading-5 text-justify'>
                        I'm a dedicated front-end developer with expertise in building responsive and dynamic web applications using modern JavaScript frameworks. My focus is on creating intuitive user interfaces and delivering exceptional user experiences.
                        Currently pursuing my MCA at University of Madras, I continue to expand my knowledge in software development while applying my skills in real-world projects.
                        I'm passionate about clean code, responsive design, and staying up-to-date with the latest web technologies and best practices.
                    </div>
                </div>
            </div>
        </>
    )
}
